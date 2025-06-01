import FlexSearch from 'flexsearch';

export type ProcessedPageType = {
  url: string;
  sections: [title: string, hash: string | null, content: string[]][];
};

export type SectionsType = ProcessedPageType['sections'];
export type SearchDocumentType = {
  url: string;
  title: string;
  content: string;
  pageTitle?: string;
};

export type Result = {
  url: string;
  title: string;
  pageTitle?: string;
};

const storeParams = [
  'title',
  'pageTitle',
] as const satisfies readonly (keyof SearchDocumentType)[];
export type StoreParams = (typeof storeParams)[number];
export type StoreResult = Pick<SearchDocumentType, StoreParams>;
export type EnrichedResults = { id: string; doc: StoreResult }[];

export class PageSearch {
  sectionIndex: FlexSearch.Document<SearchDocumentType, StoreParams[]>;
  constructor() {
    this.sectionIndex = new FlexSearch.Document({
      tokenize: 'full',
      document: {
        id: 'url',
        index: 'content',
        store: Array.from(storeParams),
      },
      context: {
        resolution: 9,
        depth: 2,
        bidirectional: true,
      },
    });
  }

  withSearchData(data: ProcessedPageType[]) {
    for (let { url, sections } of data) {
      for (let [title, hash, content] of sections) {
        this.sectionIndex.add({
          url: url + (hash ? '#' + hash : ''),
          title,
          content: [title, ...content].join('\\n'),
          pageTitle: hash ? sections[0][0] : undefined,
        });
      }
    }

    return this;
  }

  search(
    query: string,
    options: FlexSearch.DocumentSearchOptions<boolean> = {},
  ): Result[] {
    let result = this.sectionIndex.search(query, {
      ...options,
      enrich: true,
    });
    if (result.length === 0) {
      return [];
    }
    return (result[0].result as any as EnrichedResults).map((item) => ({
      url: item.id,
      title: item.doc.title,
      pageTitle: item.doc.pageTitle,
    }));
  }
}

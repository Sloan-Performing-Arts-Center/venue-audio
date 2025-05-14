# Dance Rep - Patch Tables

### QL5 Console Inputs

| Input | Purpose           | Patch Type | Path            | Notes                |
| ----- | ----------------- | ---------- | --------------- | -------------------- |
| 1     | Wireless 1        | Dante      |                 |                      |
| 2     | Wireless 2        | Dante      |                 |                      |
| 3     | Wireless 3        | Dante      |                 |                      |
| 4     | Wireless 4        | Dante      |                 |                      |
| 5     | Floor Mic 1 (SR)  | Physical   | M21 → RIO IN 21 | Normalized           |
| 6     | Floor Mic 2 (SRC) | Physical   | M22 → RIO IN 22 | Normalized           |
| 7     | Floor Mic 3 (SLC) | Physical   | M23 → RIO IN 23 | Normalized           |
| 8     | Floor Mic 4 (SL)  | Physical   | M24 → RIO IN 24 | Normalized           |
| 9     | rio9              | Physical   | RIO IN 9        |                      |
| 10    | rio10             | Physical   | RIO IN 10       |                      |
| 11    | rio11             | Physical   | RIO IN 11       |                      |
| 12    | rio12             | Physical   | RIO IN 12       |                      |
| 13    | rio13             | Physical   | RIO IN 13       |                      |
| 14    | rio14             | Physical   | RIO IN 14       |                      |
| 15    | rio15             | Physical   | RIO IN 15       |                      |
| 16    | rio16             | Physical   | RIO IN 16       |                      |
| 17    | AUX L             | Local      | XLR Input 31    | Stereo DI at console |
| 18    | AUX R             | Local      | XLR Input 32    | Stereo DI at console |
| 19    | PC Left           | Dante      | Mac Channel 63  |                      |
| 20    | PC Right          | Dante      | Mac Channel 64  |                      |
| 21    | QLab Left         | Dante      | Mac Channel 1   |                      |
| 22    | QLab Right        | Dante      | Mac Channel 2   |                      |
| 23    | QLab Aux1         | Dante      | Mac Channel 3   |                      |
| 24    | QLab Aux2         | Dante      | Mac Channel 4   |                      |
| 25    | dante25           | Dante      | Dante IN 25     |                      |
| 26    | dante26           | Dante      | Dante IN 26     |                      |
| 27    | dante27           | Dante      | Dante IN 27     |                      |
| 28    | dante28           | Dante      | Dante IN 28     |                      |
| 29    | dante29           | Dante      | Dante IN 29     |                      |
| 30    | dante30           | Dante      | Dante IN 30     |                      |
| 31    | dante31           | Dante      | Dante IN 31     |                      |
| 32    | dante32           | Dante      | Dante IN 32     |                      |

### QL5 Console Outputs

The Main Stereo Bus (**`ST`**) runs signal evenly to the full mains system (L, C, R, and Sub).

| #   | Bus      | Purpose        | Patch Type | Path            | Notes                       |
| --- | -------- | -------------- | ---------- | --------------- | --------------------------- |
| 1   | Matrix 1 | Main L         | Dante      | Tesira          |                             |
| 2   | Matrix 2 | Main R         | Dante      | Tesira          |                             |
| 3   | Matrix 3 | Main C         | Physical   | RIO OUT 1 → A58 |                             |
| 4   | Matrix 4 | Sub 1          | Dante      | CAT3-1          |                             |
| 5   | Matrix 5 | Sub 2          | Dante      | CAT3-2          |                             |
| 6   | Mix 1    | Foldback SL    | Dante      | CAT3-3          |                             |
| 7   | Mix 2    | Foldback SR    | Dante      | CAT3-4          |                             |
| 8   | Mix 3    | Floor Mon 1 SL | Physical   | RIO OUT 2 → A13 | _optional_                  |
| 9   | Mix 4    | Floor Mon 2 SL | Physical   | RIO OUT 3 → A14 | _optional_                  |
| 10  | Mix 5    | Floor Mon 1 SR | Physical   | RIO OUT 4 → A21 | _optional_                  |
| 11  | Mix 6    | Floor Mon 2 SR | Physical   | RIO OUT 5 → A22 | _optional_                  |
|     |
| 12  | Matrix 7 | Send to TF L   | Dante      |                 | Backstage and ALS as needed |
| 13  | Matrix 8 | Send to TF R   | Dante      |                 | Backstage and ALS as needed |

> [!NOTE]
> Ports marked `CAT3-#` refer to the permanent 4-output panel at the center of catwalk 3. This panel is designated for the dance rep speaker plot and has labelled ports for each speaker.

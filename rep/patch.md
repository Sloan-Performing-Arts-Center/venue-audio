# Dance Rep - Patch Tables

### QL5 Console Inputs

| Input | Purpose           | Patch Type | Path            | Notes                |
| ----- | ----------------- | ---------- | --------------- | -------------------- |
| 1     | Wireless 1        | Dante      |                 |                      |
| 2     | Wireless 2        | Dante      |                 |                      |
| 3     | Wireless 3        | Dante      |                 |                      |
| 4     | Wireless 4        | Dante      |                 |                      |
| 5     | Floor Mic 1 (SR)  | Dante      | M21 → RIO IN 21 | Normalized           |
| 6     | Floor Mic 2 (SRC) | Dante      | M22 → RIO IN 22 | Normalized           |
| 7     | Floor Mic 3 (SLC) | Dante      | M23 → RIO IN 23 | Normalized           |
| 8     | Floor Mic 4 (SL)  | Dante      | M24 → RIO IN 24 | Normalized           |
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
| 19    | PC Left           | Dante      | iMac Channel 63 |                      |
| 20    | PC Right          | Dante      | iMac Channel 64 |                      |
| 21    | QLab Left         | Dante      | iMac Channel 1  |                      |
| 22    | QLab Right        | Dante      | iMac Channel 2  |                      |
| 23    | QLab Aux1         | Dante      | iMac Channel 3  |                      |
| 24    | QLab Aux2         | Dante      | iMac Channel 4  |                      |
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

| #   | Bus      | Purpose        | Patch Type | Path             | Notes                       |
| --- | -------- | -------------- | ---------- | ---------------- | --------------------------- |
| 1   | Matrix 1 | Main L         | Dante      | Tesira           |                             |
| 2   | Matrix 2 | Main R         | Dante      | Tesira           |                             |
| 3   | Matrix 3 | Main C         | Physical   | RIO OUT 1 → A58  |                             |
| 4   | Matrix 4 | Sub 1          | Physical   | RIO OUT 2 → A115 |                             |
| 5   | Matrix 5 | Sub 2          | Physical   | RIO OUT 3 → A125 |                             |
| 6   | Mix 1    | Foldback SL    | Physical   | RIO OUT 4 → A126 |                             |
| 7   | Mix 2    | Foldback SR    | Physical   | RIO OUT 5 → A116 |                             |
| 8   | Mix 3    | Floor Mon 1 SL | Physical   | RIO OUT 6 → A73  | _optional_                  |
| 9   | Mix 4    | Floor Mon 2 SL | Physical   | RIO OUT 7 → A74  | _optional_                  |
| 10  | Mix 5    | Floor Mon 1 SR | Physical   | RIO OUT 8 → A81  | _optional_                  |
| 11  | Mix 6    | Floor Mon 2 SR | Physical   | RIO OUT 9 → A82  | _optional_                  |
|     |
| 12  | Matrix 7 | Send to TF L   | Dante      |                  | Backstage and ALS as needed |
| 13  | Matrix 8 | Send to TF R   | Dante      |                  | Backstage and ALS as needed |

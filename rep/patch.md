### QL5 House Inputs

| Input | Purpose           | Patch Type | Path            | Notes      |
| ----- | ----------------- | ---------- | --------------- | ---------- |
| 1     | Wireless 1        | Dante      |                 |
| 2     | Wireless 2        | Dante      |                 |
| 3     | Wireless 3        | Dante      |                 |
| 4     | Wireless 4        | Dante      |                 |
| 5     | Floor Mic 1 (SL)  | Dante      | M24 - RIO 24 IN | Normalized |
| 6     | Floor Mic 2 (SLC) | Dante      | M23 – RIO 23 IN | Normalized |
| 7     | Floor Mic 3 (SRC) | Dante      | M22 – RIO 22 IN | Normalized |
| 8     | Floor Mic 4 (SR)  | Dante      | M21 – RIO 21 IN | Normalized |
| 9     | Open              | Physical   | A# - RIO 9 IN   |
| 10    | Open              | Physical   | A# - RIO 10 IN  |
| 11    | Open              | Physical   | A# - RIO 11 IN  |
| 12    | Open              | Physical   | A# - RIO 12 IN  |
| 13    | Open              | Physical   | A# - RIO 13 IN  |
| 14    | Open              | Physical   | A# - RIO 14 IN  |
| 15    | Open              | Physical   | A# - RIO 15 IN  |
| 16    | Open              | Physical   | A# - RIO 16 IN  |
| 17    | AUX L             | Local      | XLR Input 31    |
| 18    | AUX R             | Local      | XLR Input 32    |
| 19    | PC Left           | Dante      | DVSC Channel 63 |
| 20    | PC Right          | Dante      | DVSC Channel 64 |
| 21    | QLab Left         | Dante      | DVSC Channel 1  |
| 22    | QLab Right        | Dante      | DVSC Channel 2  |
| 23    | QLab Aux1         | Dante      | DVSC Channel 3  |
| 24    | QLab Aux2         | Dante      | DVSC Channel 4  |

### QL5 House Outputs

_Stereo Left (Main Left, Center, Sub)_
_Stereo Right (Main Right, Center, Sub)_

| Output | Purpose        | Patch Type | Path             | Notes    |
| ------ | -------------- | ---------- | ---------------- | -------- |
| 1      | Main L         | Dante      |                  | Matrix 1 |
| 2      | Main R         | Dante      |                  | Matrix 2 |
| 3      | Main C         | Physical   | A58 – RIO 1 OUT  | Matrix 3 |
| 4      | Sub 1          | Physical   | A115 – RIO 2 OUT | Matrix 4 |
| 5      | Sub 2          | Physical   | A125 – RIO 3 OUT | Matrix 5 |
| 6      | Foldback SL    | Physical   | A126 – RIO 4 OUT | Mix 1    |
| 7      | Foldback SR    | Physical   | A116 – RIO 5 OUT | Mix 2    |
| 8      | Floor Mon 1 SL | Physical   | A73 – RIO 6 OUT  | Mix 3    |
| 9      | Floor Mon 2 SL | Physical   | A74 – RIO 7 OUT  | Mix 4    |
| 10     | Floor Mon 1 SR | Physical   | A81 – RIO 8 OUT  | Mix 5    |
| 11     | Floor Mon 2 SR | Physical   | A82 – RIO 9 OUT  | Mix 6    |
| 12     | Open           |            |                  |
| 13     | Open           |            |                  |
| 14     | Open           |            |                  |
| 15     | Send to TF L   | Dante      |                  | Matrix 7 |
| 16     | Send to TF R   | Dante      |                  | Matrix 8 |

### TF ins

| Input | Purpose         | Patch Type | Path         | Notes |
| ----- | --------------- | ---------- | ------------ | ----- |
| 1     | XY Mic Pair     | Physical   |              |
| 2     | XY Mic Pair     | Physical   |              |
| 3     | Send from QL5   | Dante      |              |
| 4     | Send from QL5   | Dante      |              |
| 5     | SM Announce Mic | Physical   | A# - TF 5 IN |
| 6     | SM Page Mic     | Physical   | A# - TF 6 IN |

### TF outs

| Output | Purpose            | Patch Type | Path | Notes                       |
| ------ | ------------------ | ---------- | ---- | --------------------------- |
| 1      | Monitor System 1   | Dante      |      | Dante 1 (Crestron)          |
| 2      | ALS System         | Physical   |      |
| 3      | Monitor System 2   | Dante      |      | Dante 2 (Crestron)          |
| 4      | (Input from Patch) | Physical   |      | Input from patch (Crestron) |
| 5      | Open               |            |      |
| 6      | Open               |            |      |

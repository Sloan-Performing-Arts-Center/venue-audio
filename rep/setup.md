# System Setup: Dance Rep

## Speaker Installation

This standard plot requires adding **5 speakers**, making 7 total including the permanent mains pair.

| #   | Name            | Unit           | Location                             | Purpose                                 |
| --- | --------------- | -------------- | ------------------------------------ | --------------------------------------- |
| 1   | Main&nbsp;L     | Fulcrum DX1526 | **_permanently installed_**          |                                         |
| 2   | Main&nbsp;R     | Fulcrum DX1526 | **_permanently installed_**          |                                         |
| 3   | Main&nbsp;C     | Yamaha DXR12   | Catwalk 3 - US Toe Pipe              | Center fill                             |
| 4   | Sub&nbsp;1      | RCF 702-AS II  | Catwalk 3 Floor - DS Center          | FORWARD (bottom) unit in cardioid stack |
| 5   | Sub&nbsp;2      | RCF 702-AS II  | Catwalk 3 Floor - DS Center          | REVERSE (top) unit in cardioid stack    |
| 6   | Foldback&nbsp;L | Yamaha DXR12   | Catwalk 3 - US Midrail with side arm | monitoring for performers. STAGE LEFT.  |
| 7   | Foldback&nbsp;R | Yamaha DXR12   | Catwalk 3 - US Midrail with side arm | monitoring for performers. STAGE RIGHT. |

Additional speaker outputs are available but not included by default—see this section in [extending the system](extending.md#add-floor-wedge-stage-monitors).

### Specific Speaker Details

#### Center Fill

The Main Center should be hung at the centerline on the upstage toe pipe of catwalk 3.

[[TODO get drawing and angles]]

[[TODO verify back of speaker settings (need image)]]

- Ch.1 Gain at detented 0dB mark
- switch Mic/Line to Line level
- turn other channels' gain off
- input LED turned off
- both frequency switches set to flat/off

#### Subs

The two subs should be stacked one on top of the other. The bottom unit should have its grill facing the audience side. The top unit should have its grill face the upstage wall.

Check that both subs match the following settings:

- Crossover set to 110 Hz
- Polarity set to forward
- Gain set to 3 o'clock. (This is NOT recommended for any other system, but clipping is accounted for elsewhere in this system.)

[[TODO verify back of speaker settings (need image)]]

## Analog Patch

This includes general instructions for preparing the patch for this system.

**Always follow the [patch cable color code](../specs.md#patch-bay-color-code)** when installing.

**Refer to the [patch plot](#TODO-link) to find/verify all specific patch points.**

TODO don't forget the 4 speaker drop outputs (rio output total count should be 11).

## Unorganized so far??

- explain preset PZM inputs
- explain SM VOG setup
  - link to SM VOG explanation in permanent spec

## Setting the Sound Table

![sound table picture](../assets/sound_table.png)

By convention, the sound control table is generally placed on the mezzanine, just outside of the tech booth. Directly to the right of this position is a support pillar, which has a set of patch points on its west side.

**Ensure you have located all items needed:**

1. Audio Console. (Yamaha QL5)
1. Control Computer. (2020 iMac 27")
   - Typically, "Tech Office 2" is used as the primary computer. Both iMacs have identical software packages, but certain files may be more readily available on this one.
1. Crestron DM Transmitter for video transmission.
1. Tripp Lite UPS Battery Backup.
1. Network switch for audio control network.
1. Wired Comms for operator.

### Cables to run

Run the following cables to connect the sound table into the house system.

#### Dante Audio:

1. **Dante to console.**

   Run 2 ethernet lines: Dante Primary and Dante Secondary. Use the dedicated Dante Primary/Secondary ports on the wall panel.

1. **Dante to computer.**

   Run 1 ethernet line from the **built-in ethernet jack** on the Mac to a dedicated **Dante Primary** port on the wall panel.

> [!NOTE]
> For Dante audio, please use the large blue audio snake if available, using the **4 colored ethercon lines** to connect audio paths.

#### Control Network:

1. **Control to network switch** <- D102.

   Run ethernet into the portable network switch from **wall panel port D102**. (This should be permanently connected to the control network.)

1. **Network switch to console.**

   Run ethernet from the portable switch to the QL5's ![(network symbol)](../assets/network_icon.png) network port.

1. **Network switch to computer.**

   Run ethernet from the portable switch into the Mac's included thunderbolt-to-ethernet adapter.

> [!IMPORTANT]
> The control network _must_ be plugged into the adapter, and Dante _must_ be plugged into the built-in network jack. **Each port is configured with distinct IP address settings.**

#### Video/Comms:

1. **DM Transmitter (video signal) to PTP port.**

   Connect the DM transmitter to the Mac using HDMI.

   Run ethernet from the Crestron DM Transmitter output into a point-to-point ethernet port on the wall panel.

   Use the patch bay to run this signal to another point-to-point that can reach the projector.

1. **Operator comms**.

   Run a comms box from **comms channel A**.

## Load All Base Show Files

Once the table is connected to the system, power on the console and computer.

**You will need to load 3 base show files.**

1. QL5 Base Show file.

   1. SETUP > SAVE/LOAD to access show files.
   1. Load the **`000 SLOAN BASE.clf`** show file, found in the root folder.

1. Dante Patch Preset.

   1. Open **Dante Controller** on the Mac.
   1. **WAIT** for devices to show up on screen. If they don't, see [troubleshooting](../troubleshooting.md#network-connection-issues-on-mac).
   1. Use the Load Preset option (File menu) to load `Desktop/Dante Presets/SLOAN BASE.xml`.
   1. Click OK on the popup (use the default options that come up.)

1. TF-RACK Base Scene.
   1. Find the installed Yamaha TF-RACK in the rack room.
   1. Go to the scene menu in the top left corner.
   1. Load the **`TF BASE`** scene, which is the first available.

### Wireless Microphone Gain

Once you have loaded the QL5 base file and the Dante patch, you should be able to control the wireless microphone gain using the console.

**All microphones should be set to `??? dB` of gain.**

[[TODO what is the number and does it actually not recall]]

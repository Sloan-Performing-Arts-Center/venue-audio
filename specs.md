# Permanent Specifications

This section covers aspects of the space which are used for all shows, at all times.

## Patch Bay Color Code

The Patch bay uses a color-coding scheme to signify different uses for a patch point. **Colors in this table are shown in order from most permanent to least permanent.**

> [!IMPORTANT]
> Note that **labelled patch cables are the exception to the color code below.** Before removing or changing a patch cable, always double check that it doesn't have a labelled purpose on either end.

| Cable Type                       | Purpose              | Notes                                                                                                                                                                                                                              |
| -------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ${\color{green}\text{Green}}$    | Permanent&nbsp;Patch | These cables should be left **connected at all times**. Any changes made to green connections must be documented and reported to the Operations Manager.                                                                           |
| ${\color{blue}\text{Blue}}$      | Season&nbsp;Patch    | These cables are for connections that last for **multiple shows in a row**, such as for the entire dance season.                                                                                                                   |
| ${\color{red}\text{Red}}$        | Show&nbsp;Patch      | These cables are for connections used **during the current show only**.                                                                                                                                                            |
| ${\color{#DAA520}\text{Yellow}}$ | Tech&nbsp;Patch      | Use these cables for connections that will **need to change during the current show's production**. This is most commonly used to connect to temporary tables during technical rehearsals, which are struck upon a show's opening. |

&nbsp;

**Please strike patch cables as described below:**

### After technical rehearsals

Remove/move all **${\color{#DAA520}\text{yellow}}$** patch cables, as needed.

### When striking any show

Remove all **${\color{red}\text{red}}$** cables and any remaining **${\color{#DAA520}\text{yellow}}$** cables.

### When striking a rep plot

Remove all **${\color{blue}\text{blue}}$** cables and any remaining **${\color{#DAA520}\text{yellow}}$** or **${\color{red}\text{red}}$** cables.

## Permanent Patch Points

The following patch points should always be connected, to at least one side.

| Purpose                    | From                 | To             | Notes                                                                                                                                   |
| -------------------------- | -------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Room Mics LR               | M57-58               | TF IN 1-2      | for backstage feed                                                                                                                      |
| Network Cam                | D88                  | Campus Network | for lobby video feed                                                                                                                    |
| SM Video Camera            | D89                  | Cam 1          |
| SM VIDEO OUT               | SM Out (unlabelled?) | D107 (default) | DEFAULT to SM video monitor. This may be changed for shows but should return back.                                                      |
|                            |
| Audio Control to Mezzanine | Control Switch       | D102           | If you need to use the sound console elsewhere, do not strike this cable. Just patch an additional PTP into the control network switch. |
| Audio Control to Booth     | Control Switch       | D108           | Typically connects to ETC Ion's Port 2 for OSC control.                                                                                 |

## Backstage zones

Audio can be routed to various locations throughout the buidling using the installed AV system (Crestron/Tesira). The system is divided into the following zones:

- Zone A: Main Lobby
- Zone B: Lobby Left Side (by the theater entrance door)
- Zone C: Bathrooms
- Zone C2: Front Offices
- Zone D1: Green Room only
- Zone D2: prod support - booth tech office + dressing rooms + green room hallway
  - probably cond lab and costumes too

## SM VOG/God Mic/Paging Microphone System

The SM Voice of God system is made up of three primary components:

- Shure PGA god mic.
- ROLLS push to talk button
- Radial A/B switcher.

![god mic system](assets/sm_mic.png)

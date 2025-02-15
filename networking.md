# Theater IP Networks

---

[**Live IP Addressing Spreadsheet (Dante & Control) →**](https://docs.google.com/spreadsheets/d/1stSgA-eeNP3GPM0xlEwX6Fdci_NsIVCoX9OwbNLJ6Do/edit)

This spreadsheet has up-to-date IP addresses for any devices on these networks. If you configure a new device with a static IP, make sure you check this list first.

---

## Control Network (Audio/Video)

> **SUBNET:** 192.168.0.XX

The control network passes **control signals** between devices in the theater.

Connected devices include the audio console, QLab Macs, projectors, iPads, and the backstage audio system.

#### Common Uses:

- **Backstage audio system control**.

  The `SHOW CONTROL` cues in the QLab template communicate with the projector and backstage audio system on this network.

- **Remote control for the Yamaha QL5**.

  Use this network to connect from the QL iPad app.

- **Remote monitoring for QLab**.

  Stage managers can see a live monitor of QLab cue timing by connecting to this network.

- **OSC communication: Lighting ↔ Sound**.

  Connecting the ETC Ion's network port 2 to this network allows EOS and QLab to communicate using OSC commands. You can fire lighting cues from sound cues, or vice versa.

### Wireless network access

The control network has a permanently-installed wireless access point for use with iPads and other computers.

This is a hidden network—see network details physically posted. The network SSID is `Sloan Audio`.

### Patch bay access (point-to-port ports)

There are 8 ethernet ports in the patch bay for connecting to the control network. They are located in a row above the other ethernet patch points.

You can use these to enable the control network at any P2P wall port in the space.

### Using DHCP

The control network uses a DHCP server for automatic IP assignment. Most permanent devices in the space have a static IP, which are listed in the spreadsheet [above](#theater-ip-networks).

## Dante Network

> **SUBNET:** Primary 135.254.16.XX  
> **SUBNET:** Secondary 172.31.16.XX

The [Dante](https://www.getdante.com) network passes actual **audio signals** between devices in the theater.

### Ethernet connections

Dante ports are available on select wall ports in the theater. Ports are specifically marked `Dante Primary` (or Secondary).

Dante ports in the patch bay may be available soon, but they remain unavailable as of Feb 2025. If you need Dante on a point-to-point port, you'll need to jumper from a wall box Dante port into a P2P port on that box, and then patch that to the wall box you need.

> **Dante does not support wireless connections.**

### Dante patching

Use the [Dante Controller](https://www.getdante.com/product-support/dante-controller/) software to patch between devices and manage devices.

You'll need to connect to the Dante primary network on your computer first, and give yourself an IP within the subnet shown above.

### Dante device control

Some Dante devices cannot be controlled on the control network and must be controlled directly from the Dante network. These include:

- **Shure ULXD receivers**. To use Wireless Workbench, you'll need to connect to the Dante network.

- **Yamaha RIO Racks**. If you need remote preamp control, connect directly to the Dante network.

Both of these devices can also be controlled directly from the QL5 console (and its iPad and desktop applications). [Follow instructions for Device Mounting](QL5.md#mounting-devices).

### What is "Secondary"?

The theater contains a redundant Dante network for the most vital devices. This means there are two parallel Dante networks which some devices can connect to. **The secondary network is just a backup for the primary network—_it is never used unless the primary network breaks_.**

If you'd like to connect a simple device to pass audio, it's usually okay to only plug it into the primary network.

> [!IMPORTANT]
>
> \*\* **Do NOT bridge the Primary and Secondary networks together!** \*\*  
> The two networks must be completely independent of each other to work properly.
>
> Only devices that support redundant Dante should be plugged into the secondary network.  
> Any device you are plugging both networks into must have dedicated primary/secondary ports; if it does, that device has two separate network cards and will not let the two networks talk to each other (good)!

## Lighting Network

> **SUBNET:** 10.101.XX.XX

> [!CAUTION]
> This website is focused on audio and video. Lighting information may be sparse, outdated, or incorrect.

The lighting network passes **lighting control messages (sACN)** between lighting devices in the space.

Devices include the lighting console, DMX gateways, and the architectural lighting system.

### Ethernet connections

The lighting network has its own dedicated wall boxes. Plug directly into any `ETC NET` port.

### ETC CueSystem

Stage managers can use the [ETC CueSystem](https://www.etcconnect.com/CueSystem/) to remotely cue actors and stagehands using small "traffic lights" around the theater.

Both the CueSystem master station and all CueSpider outstations connect directly to the lighting network. There is no way to access this system from the main control network at this time.

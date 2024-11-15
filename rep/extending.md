# Extending the Rep System

The base show files are designed to fully cover standard use cases in the space. However, every show is different.

Below, you'll find a number of simple ways to "extend the system", by adding in additional inputs, outputs, routing paths, and more. Before you start designing a complicated solution from scratch, make sure it's not already covered in this list.

## Audio

All of these items can be added **without any changes to the QL5's built-in patch**. The only changes to the physical patch bay or to the Dante patch in Dante Controller would be devices/inputs that you add yourself.

### Add analog audio inputs

**Input channels 9-16** on the console are reserved for adding additional analog audio inputs, and they are 1:1 patched into the patch bay.

In the patch bay, **patch any audio channel into RIO inputs 9-16.** They should work immediately.

### Add digital audio inputs

**Input channels 25-32** on the console are reserved for adding additional digital audio inputs. They can be directly patched from Dante Controller.

Open Dante Controller, and **patch any audio channel into the QL5's Dante inputs 25-32.** They should work without any additional QL configuration.

### Add floor wedge stage monitors

4 additional mix outputs are pre-patched on the desk for use with floor monitors, as needed. They correspond to the first 2 ports on the DSL patch panel, and the first 2 ports on the DSR patch panel.

On the QL5, the mix outputs are named with the patch panel port number. **Route any audio into that mix bus, and plug a speaker into the corresponding patch panel port.**

### Add QLab outputs ("specials")

By default, audio coming out of QLab will be routed sensibly to all speakers in the space. **If you need to have a cue that goes to a specific set of speakers**, there are two "QLab Aux" channels provided for this purpose. Follow these steps:

1. **Send signal to a QLab Aux.**
   - In QLab, select the audio cue you'd like to route differently. In the cue's `Levels` tab, you should see 4 output faders, with two turned off. **Choose one QLab Aux to use for this speaker setup.**
   - Route audio into the cue output for your chosen QLab Aux, and turn off the main QLab LR cue outputs.
1. **Route the QLab Aux to output mixes on the console.**
   - On the console, select the chosen QLab Aux input channel (it's in the 17-24 bank). Route this channel to whichever mixes or matrices correspond to the speakers you want to hear the cue out of.
   - Make sure the QLab Aux fader is turned up and turned on!

That's it! You should be able to send audio directly to any speaker using the QLab Aux outputs.

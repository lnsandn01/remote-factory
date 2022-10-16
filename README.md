# remote-factory
## Controling a factory via a 3D-clone in Web-XR

**!Warning!** This is just a prototype<br>

This is just for showcasing how you could remotely control a device connected to the internet, by interacting with a 3D-model of the device in VR.<br>
This even works with eg. the Oculus 2 hand-tracking functionality.<br>
The real device sends http requests to an api at the server with its current state attached, so that the current state can be represented in the simulation. If the simulated device has been interacted with, a http request is send to the real device, where this action is to be replicated.<br>

The **main issue** is the labor intensive process, of creating a 3D-model, and a functional model in Nodejs that represent the device or devices.<br>

This project is built with the WebXR framework A-frame<br>
This project was setup with the free prototyping webservice [Glitch.com](https://glitch.com), that has a nice WebXR integration and website builder.<br>

![alt text](machine_interaction.gif "Machine interaction in VR")

## Setup

* Create an account on [glitch.com](https://glitch.com)
* Create a new project with this github as source
* Remix this newly created project so you have two projects, one for the simulation and one for the "actual device" (you can change this later to your own remote device)
* In the project for the simulated device (simulated) rename the files "..._remote" so they don't include the "_remote" part anymore. You do the same with the project for the actual device but the other way around, you rename the files "..._actual". You find those files in the folders "src/js" and "src/pages"
* Now in the preview window of glitch, the project should be rendered, and you can interact with the on button with your mouse or in VR.
* But you still need to change some links contained in the "src/js" files you just renamed. Change the "actual-factory.glitch.me" and "remote-factory.glitch.me" parts of the links with the project links of your projects.
* You should be able to see the color of the "On" button change when you press it, and this change will propagate to the other project, if both projects are running at the same time and if you have changed the links correctly.
* Don't press the button too fast, the logic I have written does not refresh so often, and the projects can get out of synch

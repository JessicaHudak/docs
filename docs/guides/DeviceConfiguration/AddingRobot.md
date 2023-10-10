---
sidebar_position: 2
---

# Adding a Robot

Before adding a robot to the Device Library, install the robot and robot controller following vendor instructions. Go to **ready-robotics.com** to find a startup guide for your robot controller.

1. In the Device Library, select the type of robot that you are using. Then tap **NEXT**.

  ![](../Images/DeviceConfiguration/DeviceLibrary-Filter-Robot.png)

2. Type in a ​**Device Name​** and the device **​​IP Address**. A **Description** is optional. Then select your ​**Robot** ​and **Controller**​ models. If you are using a force sensor device, select it from the dropdown. The dropdown lists force sensor devices that are already configured on the ForgeOS system.

  ![](../Images/DeviceConfiguration/Robot-Home.png)

:::info
The force sensor selection applies **only** to a force sensor that is attached to the end of the robot arm. If you are using a force sensor device elsewhere in the workcell, set that up as a separate device unrelated to the robot arm.
:::

3. For some robot brands, you may see a prompt to insert a 2GB USB flash drive. If you do, insert a flash drive into your IPC and follow READY startup instructions to transfer files to the robot.

  ![](../Images/DeviceConfiguration/Robot-CopyConfigurationFiles-InsertUSB.png)

:::caution
If your robot brand requires configuration file updates, it's critical to update those each time you update ForgeOS to guarantee that the robot moves as expected.
:::

4. Tap **SAVE**. Wait for ForgeOS to connect with the robot.

:::note
The SAVE button is only available when all required fields are filled in.
:::

5. Add all the **Tool Center Points \(TCPs\)** and **Payloads** that you expect to use in your task. Select one TCP and one Payload to be **Active on Boot** \(which means that they will be automatically selected when you log in\).

  ![](../Images/DeviceConfiguration/Robot-TCPsandPayloads.png)

:::info
Return to this screen at any time after device setup to add, modify, and remove TCPs and Payloads.
:::

:::info
Some robots require an extra tool loading procedure on the native robot pendant to resolve errors after adding, modifying, and removing TCPs and Payloads on the READY pendant. Refer to the knowledge base at ready-robotics.com.
:::

:::note
You can add a maximum of 100 TCPs and Payloads.
:::

---

The TCP is the exact translational and rotational difference between the robot tool flange \(default TCP\) and the tip of the end effector. To add a TCP, tap **NEW +** at the top-right corner of the TCP table. Enter a name. Then enter the translational and rotational offset values relative to the default TCP. Look at the robot rendering in the left side panel for reference. Rotate the view by dragging one finger across the window. Zoom in or out by using two fingers on the window in a pinching motion.

  ![](../Images/DeviceConfiguration/Robot-AddTCP.png)

:::info
The default TCP is at the robot's tool flange.
:::

:::info
The values for X, Y, and Z represent the TCP's position with respect to the default TCP in Cartesian coordinates. RX, RY, and RZ represent the TCP's rotational offset from each of the axes on the default TCP. To find the rotational offset values, find the rotation needed around the original X-axis \(RX\). Then find the rotation needed around the original Y-axis \(RY\). Last, find the rotation needed around the original Z-axis \(RZ\).
:::

:::tip
Use your right hand to visualize XYZ coordinates and to find the direction of positive rotations. Point your thumb in the direction of the positive axis \(direction of the arrow\). The direction that your fingers curl is the positive direction of rotation.

![](../Images/DeviceConfiguration/RightHandRuleXYZ.png)

![](../Images/DeviceConfiguration/RightHandRule-Curl.png)

:::

---

The payload is the mass and center of gravity position relative to the robot’s default TCP. To add a payload, tap **NEW +** at the top-right corner of the payload table. Enter a name and the mass and offset values relative to the tool flange. Look at the robot rendering in the left side panel for reference. The payload is represented by a sphere at the coordinates you enter. The larger the mass, the larger the sphere.

  ![](../Images/DeviceConfiguration/Robot-AddPayload.png)

:::info
The default payload is a mass of zero, with the center of mass at the flange.
:::

---

6. Tap **NEXT**.


7. If you have devices wired into your robot controller's Input/Output \(I/O\) signals, follow these substeps:

  -  Enter a **Display Name** \(i.e. “Open Machine Door”, “Open Pneumatic Vise”, or “Start Machining Cycle”\) to show what each configured signal does.

  - If you want a signal to appear in the device's Device Control page, tap the **DCP** checkbox next to that signal.

  ![](../Images/DeviceConfiguration/Robot-InputSignals.png)

:::info
Return to this screen at any time \(by selecting the device in Device Configuration and tapping **Edit**\) to modify I/O configuration.
::: 

8. Tap **SAVE**.

9. ForgeOS returns to the Device Configuration home screen. Make sure that your robot appears on the configured devices list and that it is ​**enabled**​.

:::note
A device is **enabled** when its switch is green and toggled to the right.
:::


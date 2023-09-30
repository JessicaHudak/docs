# Device Configuration

The Device Configuration app is used to add and manage devices in ForgeOS. Sign in as an **Admin** to access it. Supported devices include robot arms, PLCs, IO devices, end of arm tooling, and a wide range of fieldbus peripherals.

![](../Images/DeviceConfiguration/DeviceConfiguration-Icon.png)

## Configured Devices List

The Configured Devices List shows whether added devices are **Enabled** or **Disabled**. Toggle the switches in the table to enable or disable devices. When a device is enabled, the toggle is to the right and the slider is green. Control enabled devices in the Device Control app and Task Canvas app.

|To edit a device, select it on the table and tap **Edit** at the top of the table. Only one device may be edited at a time.

To deselect devices, tap the checkbox next to the name or tap **Cancel** in the top right of the table.

To delete one or more devices, select the devices and tap **Delete**at the top of the table.

|![](../Images/DeviceConfiguration/DeviceConfiguration-Icon.png)|

**Note:** In Task Canvas, device blocks only execute when the device is **Enabled**. If you **Delete**and re-add a device, affected device blocks must be remapped to the new device or removed from the task. See [Task Settings](../TaskCanvas/TaskSettings.md) for more information on device remapping,

## Device Library

The Device Library lists all devices supported by ForgeOS. To access the Device Library, tap **New +** in the Device Configuration app. Sort and filter the list to find devices by **Name**, by **Vendor**, or by **Type**.

![](../Images/DeviceConfiguration/DeviceConfiguration-Icon.png)

|No.|Device Library Feature|Description|
|---|----------------------|-----------|
|1|Filter Selection|Tap the dropdown and select the type of device to add.|
|2|List Sorting|Tap the sort arrows next to the **Device Name**, **Vendor**, or **Type** columns to sort the list alphanumerically according to that column's category.|
|3|Device List|Search through the list of supported devices.|
|4|Search|Tap the search icon \(a magnifying glass\) and type in the search bar to find a device by name, vendor, or type. Tap the search icon again to close the search bar.|
|5|List Navigation|Tap the navigation arrows or the page selection dropdown to view more supported devices.|

-   **[Adding a Robot](../DeviceConfiguration/AddingRobot.md)**  

-   **[Adding a Forge/Ctrl](../DeviceConfiguration/AddingForgeCtrl.md)**  

-   **[Adding a Rockwell Automation Logix PAC](../DeviceConfiguration/AddingRockwellAutomationLogixPAC.md)**  

-   **[Adding a Lifting Gripper](../DeviceConfiguration/AddingLiftingGripper.md)**  

-   **[Adding a Clamping Gripper](../DeviceConfiguration/AddingClampingGripper.md)**  

-   **[Adding a Robotiq Adaptive Gripper](../DeviceConfiguration/AddingRobotiqGripper.md)**  

-   **[Adding a Force Sensor](../DeviceConfiguration/AddingForceSensor.md)**  

-   **[Adding a Generic IO Device](../DeviceConfiguration/AddingGenericIODevice.md)**  

-   **[Adding a Remote Control Device](../DeviceConfiguration/AddingRemoteControlDevice.md)**  

-   **[Adding a Button/Pedal Presser](../DeviceConfiguration/AddingButtonPedalPresser.md)**  

-   **[Adding a Network I/O Device](../DeviceConfiguration/AddingNetworkDevice.md)**  

-   **[Adding a Serial Device](../DeviceConfiguration/AddingSerialDevice.md)**  



# Adding a Clamping Gripper

Follow these instructions for configuring a pneumatic or electronic clamping gripper. For an advanced clamping device, such as one with digital force control, check if it is supported in the Device Library.

**Note:** To use a clamping gripper without robot I/O, first configure the IPC and I/O devices. See [Fieldbus Configuration](../3-Settings-App/fieldbus_configuration.md) settings to learn more. Then select the signals for controlling air to the gripper.

1.  Select **Generic Clamping Gripper**. Then tap **NEXT**.

    ![](../Images/Device-Config-App-5-x/device_config_icon_5x.png)

2.  Enter a**Device Name**. A **Description**is optional.

    ![](../Images/Device-Config-App-5-x/device_config_icon_5x.png)

3.  Tap **ADD OUTPUT SIGNAL** to select the signals that actuate the gripper.

    1.  From the**Select Device**dropdown menu, select a configured I/O device driving the gripper.

        ![](../Images/Device-Config-App-5-x/device_config_icon_5x.png)

    2.  Select the air port\(s\) or I/O signals that your gripper uses. Then tap **SAVE**.

4.  To use gripper sensors to detect the state of the gripper, tap **ADD INPUT SIGNAL**. Repeat the process above to configure the sensor reading signals.

5.  Once all air ports required for the clamping device are listed in the **Gripper Control Signals** table, tap **NEXT**.

    ![](../Images/Device-Config-App-5-x/device_config_icon_5x.png)

6.  Choose which gripper state \(Open, Closed, or Relaxed\) corresponds to a **HIGH** or **LOW** signal.

    ![](../Images/Device-Config-App-5-x/device_config_icon_5x.png)

    **Note:** You cannot save the gripper configuration if you select the same conditions for multiple gripper states.

7.  Tap **SAVE** to return to the Device Configuration home screen. Make sure the Clamping Gripper appears on the configured devices list and that it is ​**enabled**​.

    ![](../Images/Device-Config-App-5-x/device_config_icon_5x.png)


**Parent topic:**[Device Configuration](../4-Device-Configuration-App/device_configuration.md)


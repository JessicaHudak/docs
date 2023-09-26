# Robot Command Blocks

The Robot Command blocks are available in the block menu for active robot devices. They include robot move blocks, robot IO blocks, and other robot command blocks.

![](../../../../_Media/ForgeOS-5-x/BlockGlossary-5-x/Robot_Command_Blocks/Robot_command_block_menu_5-x.png)

All robot move blocks share a few common features:

|**The Main Tab**

Set waypoints and other robot motion parameters. Requirements vary based on the block.|![](../../../../_Media/ForgeOS-5-x/BlockGlossary-5-x/Robot_Command_Blocks/robot-command-blocks-absolute-move-main-20220916-5.3-jlh-001.png)|

|**The TRY IT OUT Section**

Preview the move. Tap **STEP BLOCK**to move the robot to the set position. Drag the **Speed** slider to determine how fast the robot moves. Tap **RESET POSITION**to move the robot to the position it was in when you opened the block.|![](../../../../_Media/ForgeOS-5-x/BlockGlossary-5-x/Robot_Command_Blocks/robot-command-blocks-try-it-out-20220916-5.3-jlh-001.png)|

|**The Travel Speed Tab**

Set the speed of the motion. Select in the dropdown how you want to define the speed. All robots have the option of defining speed by Overall Percent \(0%-100%\) of the robot’s maximum speed. Some robots also have the options of defining speed by precise parameters \(i.e., Time to Completion or some combination of Velocity, Acceleration, and Deceleration\).|![](../../../../_Media/ForgeOS-5-x/BlockGlossary-5-x/Robot_Command_Blocks/robot-command-blocks-absolute-move-travel-speed-tab-20220916-5.3-jlh-001.png)|

**Note:** If you define motion by velocity, acceleration, deceleration, or time to completion and then import the task to another robot that doesn't support those parameters, the block may show an error until you correct and save the block.

|**The Pause While Tab**

Set conditions that pause the block while all conditions are met or while any conditions are met. Enable the “**Pause block while conditions met**” toggle to use this feature. If this toggle is enabled, you must have conditions listed for the **ACCEPT** button to be available. Add conditions with the **ADD +** dropdown.

|![](../../../../_Media/ForgeOS-5-x/BlockGlossary-5-x/Robot_Command_Blocks/robot-command-blocks-absolute-move-pause-while-tab-with-force-20220916-jlh-001.png)|

**Note:** If you have a force sensor listed in the robot's configuration in Device Configuration, enable the "**Force exceeded at end of arm sensor**" toggle. In the **Magnitude**field, set the force threshold that would pause the block.

|**The Stop If Tab**

Set conditions that stop the block while all conditions are met or while any conditions are met. When this occurs, the task proceeds down the block’s right path. Enable the “**Stop block and take right path if conditions met**” toggle to use this feature. If this toggle is enabled, you must have conditions listed for the **ACCEPT** button to be available. Add conditions with the **ADD +**dropdown.

|![](../../../../_Media/ForgeOS-5-x/BlockGlossary-5-x/Robot_Command_Blocks/robot-command-blocks-absolute-move-stop-if-tab-with-force-20220916-jlh-001.png)|

**Note:** If you have a force sensor listed in the robot's configuration in Device Configuration, enable the "**Force exceeded at end of arm sensor**" toggle. In the **Magnitude** field, set the force threshold that would stop the block.

|**The Offset Tab**

Enable the Move to Offset toggle to offset the motion. An offset defines a relative position from the waypoint\(s\) to which the robot moves. Use the Frame dropdown to set the Frame in which the offset applies. Use the value fields to set the offset from the waypoint along the axes of that Frame.|![](../../../../_Media/ForgeOS-5-x/BlockGlossary-5-x/Robot_Command_Blocks/robot-command-blocks-absolute-move-offset-tab-20220916-jlh-001.png)|

-   **[Robot I/O Blocks](../../6-Task-Canvas-App/Block_Glossary/robot_io_blocks.md)**  

-   **[Absolute Move Block](../../6-Task-Canvas-App/Block_Glossary/absolute_move_block.md)**  

-   **[Relative Move Block](../../6-Task-Canvas-App/Block_Glossary/relative_move_block.md)**  

-   **[Circular Move Block](../../6-Task-Canvas-App/Block_Glossary/circular_move_block.md)**  

-   **[Continuous Move Block](../../6-Task-Canvas-App/Block_Glossary/continuous_move_block.md)**  

-   **[Grid Move Block](../../6-Task-Canvas-App/Block_Glossary/grid_move_block.md)**  

-   **[Array Move Block](../../6-Task-Canvas-App/Block_Glossary/array_move_block.md)**  

-   **[Set TCP/Payload Block](../../6-Task-Canvas-App/Block_Glossary/tcp_payload_block.md)**  


**Parent topic:**[Block Glossary](../../6-Task-Canvas-App/Block_Glossary/block_glossary.md)


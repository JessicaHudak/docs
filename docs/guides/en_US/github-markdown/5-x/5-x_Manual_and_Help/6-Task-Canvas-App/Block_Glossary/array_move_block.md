# Array Move Block

|The Array Move specifies a custom list of waypoints that the robot moves to, one at a time, each time the block executes.

|![](../../../../_Media/ForgeOS-5-x/BlockGlossary-5-x/Robot_Command_Blocks/Robot_command_block_path_array_move_5-x.png)|

|In the **Main**tab, the Target table shows the list of targets that the robot moves to during the Array Move. The order that the robot visits these targets is the order they appear in the table. After the robot has moved through all the positions, it starts over from the top.

Tap **ADD +** to select a waypoint to add to the table. From the dropdown, select a new or existing waypoint.

|![](../../../../_Media/ForgeOS-5-x/BlockGlossary-5-x/Robot_Command_Blocks/robot-command-blocks-array-move-main-20220916-5.3-jlh-001.png)|

|In the **Array Index** tab, customize the indexing behavior. The **Index Variable**field is where you choose an integer variable to decide which index the Array Move moves to when it executes. When you use an index variable, your task must update the variable with other blocks.

Choose a waypoint in the **Resolve Array Position to Waypoint** field to update that waypoint with the next array position each time the block executes.

|![](../../../../_Media/ForgeOS-5-x/BlockGlossary-5-x/Robot_Command_Blocks/robot-command-blocks-array-move-index-20220916-5.3-jlh-001.png)|

**Note:** When there is a waypoint in the Resolve field, the Array block does **not** move the robot. It saves the chosen waypoint at the grid position. Then you may use this waypoint in other move blocks, like the Continuous Move. Execute the Array Move block to update the waypoint with the next position in the list.

See [Robot Command Blocks](robot_command_blocks.md) for more info on the other block features.

**Parent topic:**[Robot Command Blocks](../../6-Task-Canvas-App/Block_Glossary/robot_command_blocks.md)


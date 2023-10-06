---
sidebar_position: 20
---

# Absolute Move Block

|The Absolute Move block performs a motion to a single position defined by a waypoint.

In the **Main** tab, tap the **Waypoint selector** to create a new waypoint or choose an existing waypoint.

Tap **Linear Move** or **Joint Move** to select the motion that the robot performs to the waypoint.

|![](../Images/TaskCanvasBlockGlossary/Robot-Absolute-Block.png)|

|-   A **Linear** move tells the robot to take the shortest path to the programmed TCP pose. Depending on where the robot is moving from, several joint positions may be possible for the same TCP pose.

-   To guarantee that the robot moves to the same joint positions every time, choose **Joint**.

|![](../Images/TaskCanvasBlockGlossary/Robot-Absolute-Settings-Main.png)|

See [Robot Command Blocks](Robot-Overview.md) for more info on the other block features.

**Parent topic:**[Robot Command Blocks](../TaskCanvasBlockGlossary/Robot-Overview.md)


# Check Block

The Check block compares chosen parameters or inputs to expected values.

|If the inputs meet the expected conditions, the task moves on through the bottom path \(**Checks Passed**\).

If the inputs don't meet the expected conditions, the task moves on through the right path \(**Checks Not Passed**\).

|![](../Images/TaskCanvasBlockGlossary/Canvas-Block-Wait.png)|

|In the Check block settings, choose the check conditions.

Tap the **Block passes when** dropdown to choose:

-   **All match:**All comparisons must be true for the block to follow the bottom path.

-   **Any match:**At least one of the conditions must be true for the block to follow the bottom path.

|![](../Images/TaskCanvasBlockGlossary/Canvas-Block-Wait.png)![](../Images/TaskCanvasBlockGlossary/Canvas-Block-Wait.png)

|

By default, a Check block performs the check right away. To make the Check block check continuously for a set period of time, toggle the **Enable Timer** switch and enter a timer duration. When the conditions are met, the block passes to the bottom path and the timer resets for the next execution. If the conditions are not met before the time expires, the block moves to the right path and the timer resets for the next execution.

|Tap **ADD+** to add a condition to the block.

Conditions display as:

\[Parameter or Signal\] \[Operator\] \[Value\].

To remove a line, tap the red Delete button.

|![](../Images/TaskCanvasBlockGlossary/Canvas-Block-Wait.png)|

The Check block can perform these checks:

|Parameter or Signal|Operator|Checked Value|
|-------------------|--------|-------------|
|Digital Input, digital output|=, ≠|High, low, Boolean variable, digital signal|
|Analog input, analog output|=, ≠, <, ≤, \>, ≥, ≈, ≉|Numerical value, numerical variable, analog signal|
|Integer or Float variable|=, ≠, <, ≤, \>, ≥, ≈, ≉|Numerical value, numerical variable, analog signal, Waypoint or Frame component|
|String variable|=, ≠|String variable|
|Boolean variable|=, ≠|High, low, Boolean value, digital signal|
|Waypoint or Frame|≈, ≉|Waypoint or Frame \(on the same robot\)|

## Check a Waypoint or Frame

Use the Check block to check if a Waypoint or Frame has changed or if the current position is at a Waypoint or Frame.

The approximate comparisons, **≈** and **≉**, check if a Waypoint or Frame is almost equal to another one position. Use them to see if one position is close enough to another position within your defined tolerance. You can compare a linear position to another linear position or a joint position to another joint position.

For example, in the image below we check if the Current Robot Position is approximately at the same position as Waypoint-2, within +/-0.5 mm and +/-1 degree.

![](../Images/TaskCanvasBlockGlossary/Canvas-Block-Wait.png)

When you compare *linear positions*, you enter a Linear Tolerance and Rotation Tolerance. The **Linear Tolerance** defines the allowed linear distance from the checked position. The **Rotation Tolerance** defines the allowed rotation for each axis \(RX, RY, RZ\) from the checked position. The Check block fails if you use **≈** and any one of the axis rotations is off by more than the tolerance.

![](../Images/TaskCanvasBlockGlossary/Canvas-Block-Wait.png)

When you compare **joint positions**, you enter a Joint Tolerance. The Joint Tolerance defines the allowed rotation for each joint from the checked position's joint values. The Check block fails if you use **≈** and any one of the joint values is off by more than the tolerance.

![](../Images/TaskCanvasBlockGlossary/Canvas-Block-Wait.png)

**Note:** **You may notice a mismatch between the linear rotational coordinates that you specify and the linear rotational coordinates that the robot reports.** For example, if you create a waypoint or frame with the \(Rx, Ry, Rz\) values of \(-150deg, 110deg, -165deg\) with respect to the Base Frame, Task Canvas may change these values to \(30deg, 70deg, 15deg\).

Even though robots accept Ry values between -180deg and 180deg, they only report Ry values between -90deg and 90deg. If your robot adjusts a specified Ry value to fit inside the latter range, it adjusts Rx and Rz values as well. **The specified values and adjusted values represent the same position, so the robot will move as expected. However, the different notation may cause Check blocks to fail.**

**Parent topic:**[Canvas Blocks](../TaskCanvasBlockGlossary/Canvas-Overview.md)


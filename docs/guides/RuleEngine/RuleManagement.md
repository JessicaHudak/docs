# Rule Management

Inside a ruleset's manager, create, enable, edit, and delete that ruleset's rule\(s\).

|Tap **NEW +** to create a new rule.

|![](../Images/RuleEngine/RuleEngine-Icon.png)

|

|Decide if you want to add a "While condition is met", "When event occurs", or "Linked values" rule.

|![](../Images/RuleEngine/RuleEngine-Icon.png)

|

|Select "**While condition is met**" to create a "While this... do this" rule with an optional "else" rule that executes while conditions are met.

In the **When this** tab, tap **ADD +** to add conditions. In the **Conditions met when**dropdown, select:

-   **All match**: All lines must pass to perform the "Do this" assignment.

-   **Any match**: Any of the lines must pass to perform the "Do this" assignment.


In the **Do this**tab, tap **ADD +** to assign actions for while the conditions are met. For example, turn a stack light one color while a task is running.

In the **Else** tab, tap **ADD +** to assign alternative actions if the conditions are not met. For example, turn a stack light another color while a task is not running.

To see which conditions are satisfied and which ones are not, tap **Evaluate**. Conditions that pass have a green light next to them. Conditions that fail have a yellow light next to them.

To delete a condition, select it in the table. The ADD + button turns into a red trash can. Tap the trash can and confirm **DELETE**.

|![](../Images/RuleEngine/RuleEngine-Icon.png)

|

|Select "**When event occurs**" to create a "When this... do this" rule that executes once when a state change occurs.

In the **When this** tab, tap **ADD +** to add conditions. In the **Conditions met when**dropdown, select:

-   **All match**: All lines must pass to perform the "Do this" assignment.

-   **Any match**: Any of the lines must pass to perform the "Do this" assignment.


In the **Do this**tab, tap **ADD +** to assign actions for as soon as the conditions are met. For example, set the value of Variable 2 as soon as Variable 1 reaches a certain value.

To see which conditions are satisfied and which ones are not, tap **Evaluate**. Conditions that pass have a green light next to them. Conditions that fail have a yellow light next to them.

To delete a condition, select it in the table. The ADD + button turns into a red trash can. Tap the trash can and confirm **DELETE**.

|![](../Images/RuleEngine/RuleEngine-Icon.png)

|

|Select "**Linked values**" to link two parameters together so that one parameter is always equal to the other.

Tap **ADD +** to add assignments. Set the **Target** and **Source** fields. For example, set the value of Variable 1 to equal Variable 2.

To delete an assignment, select it in the table. The ADD + button turns into a red trash can. Tap the trash can and confirm **DELETE**.

|![](../Images/RuleEngine/RuleEngine-Icon.png)

|

|Tap **SAVE RULE**for the rule to appear in that ruleset's manager.

To make a rule active when the ruleset is run, toggle the **Enable** switch next to that rule in the ruleset's manager. Or toggle the **Active** switch in the rule's editor.

To edit a rule, select it in the table and tap **Edit** in the table header.

To remove one or more rules, tap **Delete** in the table header.

|![](../Images/RuleEngine/RuleEngine-Icon.png)

|

**Parent topic:**[Rule Engine](../RuleEngine/RuleEngineOverview.md)


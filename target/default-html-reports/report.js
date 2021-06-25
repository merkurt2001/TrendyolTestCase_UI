$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/task.feature");
formatter.feature({
  "name": "TRENDYOL TASK",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Login Functionality",
  "keyword": "Given "
});
formatter.match({
  "location": "com.trendyol.step_definitions.TaskDefs.Login_Functionality()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that boutique images under each Tab is displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "User should be able to click Tabs and all the images should be displayed",
  "keyword": "When "
});
formatter.match({
  "location": "com.trendyol.step_definitions.TaskDefs.User_should_be_able_to_click_Tabs_and_all_the_images_should_be_displayed()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.trendyol.step_definitions.TaskDefs.User_should_be_able_to_click_Tabs_and_all_the_images_should_be_displayed(TaskDefs.java:47)\r\n\tat ✽.User should be able to click Tabs and all the images should be displayed(file:///C:/Users/me/IdeaProjects/TrendyolTestCase_UI/src/test/resources/features/task.feature:7)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});
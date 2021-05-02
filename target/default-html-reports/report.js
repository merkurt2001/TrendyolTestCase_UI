$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/task.feature");
formatter.feature({
  "name": "Trendyol Task Calışması",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Sisteme kayıtlı bir kullanıcı ile login olunmalı",
  "keyword": "* "
});
formatter.match({
  "location": "com.trendyol.step_definitions.TaskDefs.sisteme_kayıtlı_bir_kullanıcı_ile_login_olunmalı()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login olduktan sonra, aşağıda numaralandırılan tab’lere tıklanıp yüklenmeyen butik imajı varsa hata fırlatmadan log basılmalı",
  "keyword": "* "
});
formatter.match({
  "location": "com.trendyol.step_definitions.TaskDefs.login_olduktan_sonra_aşağıda_numaralandırılan_tab_lere_tıklanıp_yüklenmeyen_butik_imajı_varsa_hata_fırlatmadan_log_basılmalı()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-6UI6RDD\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.10\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\iltun\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61209}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6b315fbb7b813c3c857e536eb6dd2622\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.trendyol.step_definitions.TaskDefs.login_olduktan_sonra_aşağıda_numaralandırılan_tab_lere_tıklanıp_yüklenmeyen_butik_imajı_varsa_hata_fırlatmadan_log_basılmalı(TaskDefs.java:40)\r\n\tat ✽.Login olduktan sonra, aşağıda numaralandırılan tab’lere tıklanıp yüklenmeyen butik imajı varsa hata fırlatmadan log basılmalı(file:///C:/Users/iltun/Desktop/SDET/Projects/TrendyolTestCase_UI/src/test/resources/features/task.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Sonrasında rastgele bir butiğe giderek, ürün görsellerinin yüklenip yüklenmediğinin kontrolü sağlanmalı (hata fırlatmayıp yine log basılabilir)",
  "keyword": "* "
});
formatter.match({
  "location": "com.trendyol.step_definitions.TaskDefs.sonrasında_rastgele_bir_butiğe_giderek_ürün_görsellerinin_yüklenip_yüklenmediğinin_kontrolü_sağlanmalı_hata_fırlatmayıp_yine_log_basılabilir()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Herhangi bir ürünün detayına gidilmeli",
  "keyword": "* "
});
formatter.match({
  "location": "com.trendyol.step_definitions.TaskDefs.herhangi_bir_ürünün_detayına_gidilmeli()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ürünü sepete ekleyip test tamamlanmalı",
  "keyword": "* "
});
formatter.match({
  "location": "com.trendyol.step_definitions.TaskDefs.ürünü_sepete_ekleyip_test_tamamlanmalı()"
});
formatter.result({
  "status": "skipped"
});
});
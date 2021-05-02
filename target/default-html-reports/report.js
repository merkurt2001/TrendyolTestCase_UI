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
  "keyword": "Given "
});
formatter.match({
  "location": "com.trendyol.step_definitions.TaskDefs.sisteme_kayıtlı_bir_kullanıcı_ile_login_olunmalı()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login olduktan sonra, aşağıda numaralandırılan tab’lere tıklanıp yüklenmeyen butik imajı varsa hata fırlatmadan log basılmalı",
  "keyword": "When "
});
formatter.match({
  "location": "com.trendyol.step_definitions.TaskDefs.login_olduktan_sonra_aşağıda_numaralandırılan_tab_lere_tıklanıp_yüklenmeyen_butik_imajı_varsa_hata_fırlatmadan_log_basılmalı()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sonrasında rastgele bir butiğe giderek, ürün görsellerinin yüklenip yüklenmediğinin kontrolü sağlanmalı (hata fırlatmayıp yine log basılabilir)",
  "keyword": "Then "
});
formatter.match({
  "location": "com.trendyol.step_definitions.TaskDefs.sonrasında_rastgele_bir_butiğe_giderek_ürün_görsellerinin_yüklenip_yüklenmediğinin_kontrolü_sağlanmalı_hata_fırlatmayıp_yine_log_basılabilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Herhangi bir ürünün detayına gidilmeli",
  "keyword": "And "
});
formatter.match({
  "location": "com.trendyol.step_definitions.TaskDefs.herhangi_bir_ürünün_detayına_gidilmeli()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ürünü sepete ekleyip test tamamlanmalı",
  "keyword": "And "
});
formatter.match({
  "location": "com.trendyol.step_definitions.TaskDefs.ürünü_sepete_ekleyip_test_tamamlanmalı()"
});
formatter.result({
  "status": "passed"
});
});
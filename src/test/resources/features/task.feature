Feature: Trendyol Task Calışması
  @wip
  Scenario: Task Steps
    Given Sisteme kayıtlı bir kullanıcı ile login olunmalı
    When Login olduktan sonra, aşağıda numaralandırılan tab’lere tıklanıp yüklenmeyen butik imajı varsa hata fırlatmadan log basılmalı
    Then Sonrasında rastgele bir butiğe giderek, ürün görsellerinin yüklenip yüklenmediğinin kontrolü sağlanmalı (hata fırlatmayıp yine log basılabilir)
    And Herhangi bir ürünün detayına gidilmeli
    And Ürünü sepete ekleyip test tamamlanmalı
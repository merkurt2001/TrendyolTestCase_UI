package com.trendyol.step_definitions;

import com.trendyol.pages.ButikPage;
import com.trendyol.pages.DashboardPage;
import com.trendyol.pages.LoginPage;
import com.trendyol.pages.ProductPage;
import com.trendyol.utilities.BrowserUtils;
import com.trendyol.utilities.ConfigurationReader;
import com.trendyol.utilities.Driver;
import io.cucumber.java.en.Given;

import org.junit.Assert;
import org.openqa.selenium.WebElement;

import java.util.Random;

public class TaskDefs {
    LoginPage loginPage = new LoginPage();
    DashboardPage dashboardPage = new DashboardPage();
    ButikPage butikPage = new ButikPage();
    ProductPage productPage = new ProductPage();

    @Given("Sisteme kayıtlı bir kullanıcı ile login olunmalı")
    public void sisteme_kayıtlı_bir_kullanıcı_ile_login_olunmalı() {
        //Should login page open
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
        //Should login with valid credentials
        loginPage.login(ConfigurationReader.get("username"), ConfigurationReader.get("password"));
    }

    @Given("Login olduktan sonra, aşağıda numaralandırılan tab’lere tıklanıp yüklenmeyen butik imajı varsa hata fırlatmadan log basılmalı")
    public void login_olduktan_sonra_aşağıda_numaralandırılan_tab_lere_tıklanıp_yüklenmeyen_butik_imajı_varsa_hata_fırlatmadan_log_basılmalı() {
    try {
        for (int i = 0; i < dashboardPage.tabs.size(); i++) {
            dashboardPage.tabs.get(i).click();
            BrowserUtils.waitFor(1);
            for (int j = 0; j < dashboardPage.butikImages.size(); j++) {
                Assert.assertTrue(dashboardPage.butikImages.get(j).isDisplayed());
            }
        }
        }catch (Exception e){
            e.printStackTrace();
        }

    }

    @Given("Sonrasında rastgele bir butiğe giderek, ürün görsellerinin yüklenip yüklenmediğinin kontrolü sağlanmalı \\(hata fırlatmayıp yine log basılabilir)")
    public void sonrasında_rastgele_bir_butiğe_giderek_ürün_görsellerinin_yüklenip_yüklenmediğinin_kontrolü_sağlanmalı_hata_fırlatmayıp_yine_log_basılabilir() {
        //Should choose butik randomly and verify images is displayed
        try {
            dashboardPage.chooseRandomTab();
            dashboardPage.chooseRandomButik();
            for (int j = 0; j < butikPage.productList.size(); j++) {
                Assert.assertTrue(butikPage.productList.get(j).isDisplayed());
            }

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Given("Herhangi bir ürünün detayına gidilmeli")
    public void herhangi_bir_ürünün_detayına_gidilmeli() {
       butikPage.chooseRandomProduct();
       BrowserUtils.waitFor(1);

    }

    @Given("Ürünü sepete ekleyip test tamamlanmalı")
    public void ürünü_sepete_ekleyip_test_tamamlanmalı() {
        productPage.addToCart();
        BrowserUtils.waitFor(2);//This is for to make you observe the last stage of scenario before tear down of execution.
    }


}

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
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import java.util.Random;

public class TaskDefs {
    LoginPage loginPage = new LoginPage();
    DashboardPage dashboardPage = new DashboardPage();
    ButikPage butikPage = new ButikPage();
    ProductPage productPage = new ProductPage();
    JavascriptExecutor jse = (JavascriptExecutor) Driver.get();

    @Given("Login Functionality")
    public void Login_Functionality()  {
        //Login page should be opened
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
        //login with valid credentials
        loginPage.login();
    }

    @Given("User should be able to click Tabs and all the images should be displayed")
    public void User_should_be_able_to_click_Tabs_and_all_the_images_should_be_displayed() {
        try {
            for (int i = 0; i < dashboardPage.tabs.size(); i++) {  // click on TABS one by one
                dashboardPage.tabs.get(i).click();
                BrowserUtils.waitFor(2);

                String category = dashboardPage.tabs.get(i).getText();
                String url= Driver.get().getCurrentUrl();
                System.out.println(url);
                System.out.println(category);
                Assert.assertTrue(url.contains(category.toLowerCase()));


                jse.executeScript("arguments[0].scrollIntoView(true);", dashboardPage.downToPage); // Scroll down the page
                BrowserUtils.waitFor(1);

                for (int j = 0; j < dashboardPage.butikImages.size(); j++) {    // to check if all the images displayed or not.
                    Assert.assertTrue(dashboardPage.butikImages.get(j).isDisplayed());

                }
                int totalImage = dashboardPage.butikImages.size();
                System.out.println(category + " = " + totalImage);     // print out the category name and total images

                jse.executeScript("arguments[0].scrollIntoView(true);", dashboardPage.upToPage); // Scroll up the page


            }
        } catch (Exception e) {
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

        } catch (Exception e) {
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

package com.trendyol.pages;

import com.trendyol.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;
import java.util.Random;

public class DashboardPage {

    public DashboardPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css=".tab-link")
    public List<WebElement> tabs;

    @FindBy(xpath="//span[@class ='image-container']/img")
    public List<WebElement> butikImages;




  public void chooseRandomTab (){
      Random rd = new Random();
      int randomTab = rd.nextInt(tabs.size()-1);
      tabs.get(randomTab).click();
      System.out.println(tabs.get(randomTab).getText()+ " isimli tab seçildi.");
}

    public void chooseRandomButik (){
        Random rd = new Random();
        int randomButik = rd.nextInt(butikImages.size()-1);
        butikImages.get(randomButik).click();
    }



}

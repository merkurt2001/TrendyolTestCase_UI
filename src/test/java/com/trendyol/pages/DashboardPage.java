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

    @FindBy(id="login-email")
    public List<WebElement> tabs;




  public void chooseRandomTab (){

      Random rd = new Random(tabs.size()-1);
      int randomTab = rd.nextInt();
      tabs.get(randomTab).click();


}



}

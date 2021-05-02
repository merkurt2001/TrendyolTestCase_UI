package com.trendyol.pages;

import com.trendyol.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id="login-email")
    public WebElement userName;

    @FindBy(id="login-password-input")
    public WebElement password;

    @FindBy(xpath="//button[@class='q-primary q-fluid q-button-medium q-button submit']")
    public WebElement loginButton;




    public void login (String usernameStr, String passwordStr){
        userName.sendKeys(usernameStr);
        password.sendKeys(passwordStr);
        loginButton.click();


    }



}

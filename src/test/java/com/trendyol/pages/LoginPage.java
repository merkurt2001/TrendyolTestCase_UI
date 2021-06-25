package com.trendyol.pages;

import com.trendyol.utilities.ConfigurationReader;
import com.trendyol.utilities.Driver;
import org.openqa.selenium.Alert;
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
    public WebElement passwordInput;

    @FindBy(xpath="//button[@class='q-primary q-fluid q-button-medium q-button submit']")
    public WebElement loginButton;





    public void login(){

        String email = ConfigurationReader.get("username");
        String password = ConfigurationReader.get("password");

        userName.sendKeys(email);
        passwordInput.sendKeys("password");
        loginButton.click();
    }



}

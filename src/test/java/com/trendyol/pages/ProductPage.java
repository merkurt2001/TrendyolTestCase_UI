package com.trendyol.pages;

import com.trendyol.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductPage {
    public ProductPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css=".pr-in-btn.add-to-bs")
    public WebElement addToCartButton;

    public void addToCart(){
        addToCartButton.click();
    }
}

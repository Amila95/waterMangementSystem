package com.reactLogin.login.exceptions;

public class CompanyAlreadyExistsResponse {
    private String companyName;

    public CompanyAlreadyExistsResponse(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
}

import { Notyf } from 'notyf'

export enum SccMsg {
    LOGIN_SUCCESS = 'logged in successfully',
    LOGOUT_SUCCESS = 'logged out successfully',
    REGISTER_SUCCESS = 'registered successfully',
    COMPANY_CREATE_SUCCESS = 'company created successfully',
    CUSTOMER_CREATE_SUCCESS = 'customer created successfully',
    COUPON_CREATE_SUCCESS = 'coupon created successfully',
    COMPANY_UPDATE_SUCCESS = 'company updated successfully',
    CUSTOMER_UPDATE_SUCCESS = 'customer updated successfully',
    COUPON_UPDATE_SUCCESS = 'coupon updated successfully',
    COMPANY_DELETE_SUCCESS = 'company deleted successfully',
    CUSTOMER_DELETE_SUCCESS = 'customer deleted successfully',
    COUPON_DELETE_SUCCESS = 'coupon deleted successfully',
    COMPANY_FETCH_ONE_SUCCESS = 'company fetched successfully',
    COMPANIES_FETCH_SUCCESS = 'companies fetched successfully',
    CUSTOMERS_FETCH_SUCCESS = 'customers fetched successfully',
    CUSTOMER_FETCH_ONE_SUCCESS = 'customer fetched successfully',
    COUPON_FETCH_ONE_SUCCESS = 'coupon fetched successfully',
    COUPONS_FETCH_SUCCESS = 'coupons fetched successfully',
    MY_COUPONS_FETCH_SUCCESS = 'purchase history fetched successfully',
    COUPON_PURCHASE_SUCCESS = 'coupon purchased successfully',
}

export enum ErrMsg {
    UNAUTHORIZED_ACTION = "unauthorized action for user type",
    NO_TOKEN = "no token found",
    LOGIN_FAILED = 'login failed',
    LOGOUT_FAILED = 'log out failed',
    REGISTER_FAILED = 'register failed',
    COMPANY_CREATE_FAILED = 'company create failed',
    CUSTOMER_CREATE_FAILED = 'customer create failed',
    COUPON_CREATE_FAILED = 'coupon create failed',
    COMPANY_UPDATE_FAILED = 'company update failed',
    CUSTOMER_UPDATE_FAILED = 'customer update failed',
    COUPON_UPDATE_FAILED = 'coupon update failed',
    COMPANY_DELETE_FAILED = 'company delete failed',
    CUSTOMER_DELETE_FAILED = 'customer delete failed',
    COUPON_DELETE_FAILED = 'coupon delete failed',
    COMPANY_FETCH_ONE_FAILED = 'company fetch failed',
    COMPANIES_FETCH_FAILED = 'companies fetch failed',
    CUSTOMERS_FETCH_FAILED = 'customers fetch failed',
    CUSTOMER_FETCH_ONE_FAILED = 'customer fetch failed',
    COUPON_FETCH_ONE_FAILED = 'coupon fetch failed',
    COUPON_PURCHASE_FAILED = 'coupon purchase failed',
    ERROR_NOT_FOUND = 'error not found',
}

class Notify {

    private notification = new Notyf({ duration: 6000, position: { x: "center", y: "top" } });

    public success(message: SccMsg) {
        this.notification.success(message);
    }

    public error(message: string | ErrMsg) {
        this.notification.error(this.extractMsg(message));
    }

    private extractMsg(err: any): string {

        if (typeof err?.response?.data?.value === 'string') { 
            return err.response.data.value;
        }

        if (typeof err === 'string') {
            return err;
        }

        if (typeof err?.response?.data === 'string') { 
            return err.response.data;
        }

        if (Array.isArray(err?.response?.data)) {
            return err?.response?.data[0];
        }

        
       
        if (typeof err?.message === 'string') {
            return err.message;
        }


        return "an error occurred, please try again.";


    }
}


const notify = new Notify();
export default notify;
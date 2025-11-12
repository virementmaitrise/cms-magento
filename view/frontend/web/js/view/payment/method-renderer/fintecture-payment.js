define([
    'Magento_Checkout/js/view/payment/default',
    'Magento_Checkout/js/model/quote',
    'mage/url',
], function (Component, quote, url) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Virementmaitrise_Payment/payment/fintecture'
        },
        redirectAfterPlaceOrder: false,
        afterPlaceOrder: function () {
            const afterPlaceUrl = url.build('virementmaitrise/checkout/index');
            window.location.replace(afterPlaceUrl);
        },
        getCheckoutDesign: function () {
            return window.checkoutConfig.payment.virementmaitrise.checkoutDesign;
        },
        isRecommendedItBadgeActive: function () {
            return window.checkoutConfig.payment.virementmaitrise.recommendItBadge;
        },
        forcePosition: function() {
            var totalCartAmount = quote.getTotals()()['base_grand_total'];
            var firstPositionActive = window.checkoutConfig.payment.virementmaitrise.firstPositionActive;
            var firstPositionAmount = window.checkoutConfig.payment.virementmaitrise.firstPositionAmount;
        
            if (firstPositionActive) {
                if (totalCartAmount > firstPositionAmount) {
                    var paymentModuleIT = document.getElementById('fintecture-it');
                    var paymentMethodsList = document.querySelector('.payment-group .step-title');

                    if (paymentModuleIT && paymentMethodsList) {
                        paymentMethodsList.after(paymentModuleIT);
                    }
                }
            }
        }
    });
});

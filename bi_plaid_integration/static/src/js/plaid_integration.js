/** @odoo-module **/

import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { FormController } from "@web/views/form/form_controller";
import { formView } from "@web/views/form/form_view";
import core from "web.core";
const _t = core._t;
const { Component, useState } = owl;

export class BiActionButtonFormViewController extends FormController {
    async token_initialize() {
        var bank_id;
        if(!this.props.context.params){
            bank_id = 1
        }else{
            bank_id = this.props.context.params.id
        }
        var handler = Plaid.create({
            // Create a new link_token to initialize Link
            token: (await $.post('/create_link_token')),
            onLoad: function() {
                // Optional, called when Link loads
            },
            onSuccess: function(public_token, metadata) {
                // Send the public_token to your app server.
                // The metadata object contains info about the institution the
                // user selected and the account ID or IDs, if the
                // Account Select view is enabled.
        
                if (bank_id =='1' && typeof this.props === 'undefined') {
                    bank_id = 1
                }
                $.post('/exchange_public_token', {
                    public_token: public_token,
                }, function(data){
                    $.post('/create_plaid_account', {
                        bank_id: bank_id
                    });
                });
            },
            onExit: function(err, metadata) {
                // The user exited the Link flow.
                if (err != null) {
                    // The user encountered a Plaid API error prior to exiting.
                }
                // metadata contains information about the institution
                // that the user selected and the most recent API request IDs.
                // Storing this information can be helpful for support.
            },
            onEvent: function(eventName, metadata) {
                // Optionally capture Link flow events, streamed through
                // this callback as your users connect an Item to Plaid.
                // For example:
                // eventName = "TRANSITION_VIEW"
                // metadata  = {
                //   link_session_id: "123-abc",
                //   mfa_type:        "questions",
                //   timestamp:       "2017-09-14T14:42:19.350Z",
                //   view_name:       "MFA",
                // }
            }
        });
        handler.open();
    }
}

export const PlaidFormView = {
    ...formView,
    Controller: BiActionButtonFormViewController,
};

registry.category("views").add("bi_plaid_form_view", PlaidFormView);
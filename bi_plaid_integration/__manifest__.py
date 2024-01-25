# -*- coding: utf-8 -*-
# Part of BrowseInfo. See LICENSE file for full copyright and licensing details.
{
    "name" : "Automatic Bank Synchronization | Auto Plaid Integration",
    "version": "16.0.0.1",
    'category': 'Extra Tools',
    'summary': 'Auto Bank Synchronization with Plaid Integration Online Bank Account Synchronization With Plaid Automatic Integration Bank Synchronization Via Plaid Bank Sync Connector Automatic Plaid Synchronization with Bank Sync from Plaid Sync Bank Statements Via Plaid',
    'description': """

        Automatic Plaid Synchronization Odoo App helps users to bank synchronization via plaid. User needs to configure plaid integration with given client id, secret key and selection of an environment. User needs to create an account via plaid and link odoo to plaid by using its credentials. User can easily get plaid transactions as per selection of plaid accounts, bank journal and date range in odoo.

    """,
    'author': 'BrowseInfo',
    "price": 69,
    "currency": 'EUR',
    'website': 'https://www.browseinfo.com',
    "depends" : ['account'],
    "data": [
        "data/plaid_auto_get_transactions.xml",
        "wizard/res_config_settings.xml",
        "views/bi_plaid_bank_details_view.xml",
        "wizard/bi_plaid_transactions.xml",
        "security/ir.model.access.csv"
    ],
    'assets': {
        'web.assets_backend': [
            'https://cdn.plaid.com/link/v2/stable/link-initialize.js',
            'bi_plaid_integration/static/src/js/plaid_integration.js',
            'bi_plaid_integration/static/src/xml/plaid_integration_button.xml',
        ],
    },
    'license':'OPL-1',
    'installable': True,
    'auto_install': False,
    'live_test_url':'https://youtu.be/KqnIyiGooRo',
    "images":['static/description/Automatic-Plaid-Synchronization-Banner.gif'],
}

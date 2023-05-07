export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Tableau de bord',
                    type: 'item',
                    url: '/sender/dashboard',
                    icon: 'feather icon-home',
                },
                {
                    id: 'packageForm',
                    title: 'Ajouter colis',
                    type: 'item',
                    url: '/sender/packageForm',
                    icon: 'feather icon-plus-square',
                },
                {
                    id: 'uploadPackage',
                    title: 'Importation excel',
                    type: 'item',
                    url: '/sender/upload',
                    icon: 'feather icon-upload',
                },
                {
                    id: 'packagesList',
                    title: 'Liste des colis',
                    type: 'item',
                    url: '/sender/packages',
                    icon: 'feather icon-list',
                },
                {
                    id: 'finishedPackagesList',
                    title: 'Liste des colis finis',
                    type: 'item',
                    url: '/sender/packages/finished',
                    icon: 'feather icon-list',
                },
                {
                    id: 'billsList',
                    title: 'Liste des factures',
                    type: 'item',
                    url: '/sender/bills',
                    icon: 'feather icon-file-text',
                }
            ]
        },
        
        // {
        //     id: 'ui-forms',
        //     title: 'Forms & Tables',
        //     type: 'group',
        //     icon: 'icon-group',
        //     children: [
        //         {
        //             id: 'form-basic',
        //             title: 'Home',
        //             type: 'item',
        //             url: '/',
        //             icon: 'feather icon-file-text'
        //         },
             
        //         {
        //             id: 'form-basic2',
        //             title: 'Form Elements',
        //             type: 'item',
        //             url: '/forms/form-basic',
        //             icon: 'feather icon-file-text'
        //         },
        //         {
        //             id: 'bootstrap',
        //             title: 'Table',
        //             type: 'item',
        //             icon: 'feather icon-server',
        //             url: '/tables/bootstrap'
        //         }
        //     ]
        // },
        
    ]
}
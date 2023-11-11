import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'Basic',
        isTitle: true
    },
    {
        id: 2,
        label: 'Dashboard',
        icon: 'home',
        link: '/',
    },
    {
        id: 3,
        label: 'University',
        icon: 'grid',
        subItems: [
            {
                id: 4,
                label: 'Student',                                
                subItems: [
                    {
                        id: 5,
                        label: 'Add New',
                        link: '/apps/inbox',
                        parentId: 4
                    },
                    {
                        id: 6,
                        label: 'All Studnets',
                        link: '/apps/read/1',
                        parentId: 4
                    },
                ]
            },
            {
                id: 7,
                label: 'Teacher',
                icon: 'bx-receipt',
                subItems: [
                    {
                        id: 8,
                        label: 'Add New',
                        link: '/apps/inbox',
                        parentId: 7
                    },
                    {
                        id: 9,
                        label: 'All Teachers',
                        link: '/apps/read/1',
                        parentId: 7
                    },
                ]
            },
            
            {
                id: 10,
                label: 'Course',
                icon: 'bx-receipt',
                subItems: [
                    {
                        id: 11,
                        label: 'Add New',
                        link: '/apps/invoice-list',
                        parentId: 10
                    },
                    {
                        id: 12,
                        label: 'All Courses',
                        link: '/apps/invoice-detail',
                        parentId: 10
                    },
                    {
                        id: 13,
                        label: 'Courses by Semister',
                        link: '/apps/invoice-detail',
                        parentId: 10
                    },
                    {
                        id: 14,
                        label: 'Courses by Studnet',
                        link: '/apps/invoice-detail',
                        parentId: 10
                    },
                ]
            },
            
        ]
    },
    {
        id: 15,
        label: 'HR',
        icon: 'users',
        subItems: [
            {
                id: 16,
                label: 'Department',
                link: '/account/login1',
                subItems: [
                    {
                        id: 17,
                        label: 'Add New',
                        link: '/apps/invoice-list',
                        parentId: 16
                    },
                    {
                        id: 18,
                        label: 'All Departments',
                        link: '/apps/invoice-detail',
                        parentId: 16
                    }
        
                ]
            },
            {
                id: 19,
                label: 'Designation',
                link: '/account/register1',
                subItems: [
                    {
                        id: 20,
                        label: 'Add New',
                        link: '/apps/invoice-list',
                        parentId: 19
                    },
                    {
                        id: 21,
                        label: 'All Designation',
                        link: '/apps/invoice-detail',
                        parentId: 19
                    }
        
                ]
            },

            {
                id: 22,
                label: 'Employee',
                link: '/account/recoverpw',
                subItems: [
                    {
                        id: 23,
                        label: 'Add New',
                        link: '/apps/invoice-list',
                        parentId: 22
                    },
                    {
                        id: 24,
                        label: 'All Employee',
                        link: '/apps/invoice-detail',
                        parentId: 22
                    }
        
                ]
                
            },
            {
                id: 25,
                label: 'Salary',
                link: '/account/lock-screen',
                subItems: [
                    {
                        id: 26,
                        label: 'Add New',
                        link: '/apps/invoice-list',
                        parentId: 25
                    },
                    {
                        id: 27,
                        label: 'All Salries',
                        link: '/apps/invoice-detail',
                        parentId: 25
                    }
        
                ]
               
            },
            {
                id: 28,
                label: 'Leave Type',
                link: '/account/logout',
                subItems: [
                    {
                        id: 29,
                        label: 'Add New',
                        link: '/apps/invoice-list',
                        parentId: 28
                    },
                    {
                        id: 30,
                        label: 'All Leave Types',
                        link: '/apps/invoice-detail',
                        parentId: 28
                    }
        
                ]
                
            },
            {
                id: 31,
                label: 'Leave',
                link: '/account/confirm-mail',
                subItems: [
                    {
                        id: 32,
                        label: 'Add New',
                        link: '/apps/invoice-list',
                        parentId: 31
                    },
                    {
                        id: 33,
                        label: 'All Leaves',
                        link: '/apps/invoice-detail',
                        parentId: 31
                    }
                ]
               
            },
            {
                id: 34,
                label: 'Role Setup',
                link: '/module/hr/role-setup',
                
            },
            {
                id: 35,
                label: 'User Setup', 
                link: '/module/hr/user-info-setup',                   
            },
            {
                id: 35,
                label: 'User Role Setup', 
                link: '/module/hr/user-info-role-setup',                   
            }
        ]
    },
    {
        id: 40,
        label: 'Ecommerce',
        icon: 'file-text',
        subItems: [
            {
                id: 41,
                label: 'Category',
                link: '/ecommerce/category',                
            },
            {
                id: 44,
                label: 'Brand',
                link: '/ecommerce/brand',                
            },
            {
                id: 47,
                label: 'Product',
                link: '/ecommerce/product',     
               
            },
            {
                id: 50,
                label: 'Order',
                link: '/ecommerce/order_info',
                
            },      
            {
                id: 51,
                label: 'Order Details',
                link: '/ecommerce/order_detail',
                parentId: 40
            },
        ]
    },
    {
        id: 52,
        label: 'Social',
        icon: 'briefcase',
        subItems: [
            {
                id: 53,
                label: 'Post',
                link: '/apps/invoice-list',
                subItems: [
                    {
                        id: 54,
                        label: 'Add New',
                        link: '/apps/invoice-list',
                        parentId: 53
                    },
                    {
                        id: 55,
                        label: 'All Post',
                        link: '/apps/invoice-detail',
                        parentId: 53
                    }                    
                ]
            },
            {
                id: 56,
                label: 'Status',
                link: '/apps/invoice-detail',
                subItems: [
                    {
                        id: 57,
                        label: 'Add New',
                        link: '/apps/invoice-list',
                        parentId: 56
                    },
                    {
                        id: 58,
                        label: 'All Status',
                        link: '/apps/invoice-detail',
                        parentId: 56
                    }                    
                ]
            },
            {
                id: 59,
                label: 'Comment',
                link: '/apps/invoice-detail',
                subItems: [
                    {
                        id: 60,
                        label: 'Add New',
                        link: '/apps/invoice-list',
                        parentId: 59
                    },
                    {
                        id: 61,
                        label: 'All Comments',
                        link: '/apps/invoice-detail',
                        parentId: 59
                    }                    
                ]
              
            }
        ]
    },
    {
        id: 53,
        label: 'Only For Admin',
        isTitle: true,
    },
    {
        id: 35,
        label: 'Social',
        icon: 'briefcase',
        subItems: [
            {
                id: 36,
                label: 'MENUITEMS.COMPONENTS.LIST.ALERTS',
                link: '/ui/alerts',
                parentId: 35
            },
            {
                id: 37,
                label: 'MENUITEMS.COMPONENTS.LIST.BUTTONS',
                link: '/ui/buttons',
                parentId: 35
            },
            {
                id: 38,
                label: 'MENUITEMS.COMPONENTS.LIST.CARDS',
                link: '/ui/cards',
                parentId: 35
            },
            {
                id: 39,
                label: 'MENUITEMS.COMPONENTS.LIST.CAROUSEL',
                link: '/ui/carousel',
                parentId: 35
            },
            {
                id: 40,
                label: 'MENUITEMS.COMPONENTS.LIST.DROPDOWNS',
                link: '/ui/dropdowns',
                parentId: 35
            },
            {
                id: 41,
                label: 'MENUITEMS.COMPONENTS.LIST.GRID',
                link: '/ui/grid',
                parentId: 35
            },
            {
                id: 42,
                label: 'MENUITEMS.COMPONENTS.LIST.IMAGES',
                link: '/ui/images',
                parentId: 35
            },
            {
                id: 44,
                label: 'MENUITEMS.COMPONENTS.LIST.MODALS',
                link: '/ui/modals',
                parentId: 35
            },
            {
                id: 44,
                label: 'MENUITEMS.COMPONENTS.LIST.OFFCANVAS',
                link: '/ui/Offcanvas',
                parentId: 35
            },
            {
                id: 46,
                label: 'MENUITEMS.COMPONENTS.LIST.PROGRESSBAR',
                link: '/ui/progressbars',
                parentId: 35
            },
            {
                id: 44,
                label: 'MENUITEMS.COMPONENTS.LIST.PLACEHOLDERS',
                link: '/ui/placeholders',
                parentId: 35
            },
            {
                id: 48,
                label: 'MENUITEMS.COMPONENTS.LIST.TABS',
                link: '/ui/tabs-accordions',
                parentId: 35
            },
            {
                id: 49,
                label: 'MENUITEMS.COMPONENTS.LIST.TYPOGRAPHY',
                link: '/ui/typography',
                parentId: 35
            },
            {
                id: 49,
                label: 'MENUITEMS.COMPONENTS.LIST.TOASTS',
                link: '/ui/toasts',
                parentId: 35
            },
            {
                id: 50,
                label: 'MENUITEMS.COMPONENTS.LIST.VIDEO',
                link: '/ui/video',
                parentId: 35
            },
            {
                id: 51,
                label: 'MENUITEMS.COMPONENTS.LIST.GENERAL',
                link: '/ui/general',
                parentId: 35
            },
            {
                id: 52,
                label: 'MENUITEMS.COMPONENTS.LIST.COLORS',
                link: '/ui/colors',
                parentId: 35
            },
            {
                id: 52,
                label: 'MENUITEMS.COMPONENTS.LIST.UTILITIES',
                link: '/ui/utilities',
                parentId: 35
            }
        ]
    },
    {
        id: 53,
        label: 'MENUITEMS.EXTENDED.TEXT',
        icon: 'gift',
        subItems: [
            {
                id: 54,
                label: 'MENUITEMS.EXTENDED.LIST.LIGHTBOX',
                link: '/extended/lightbox',
                parentId: 53
            },
            {
                id: 55,
                label: 'MENUITEMS.EXTENDED.LIST.RANGESLIDER',
                link: '/extended/rangeslider',
                parentId: 53
            },
            {
                id: 56,
                label: 'MENUITEMS.EXTENDED.LIST.SWEETALERT',
                link: '/extended/sweet-alert',
                parentId: 53
            },
            {
                id: 57,
                label: 'MENUITEMS.EXTENDED.LIST.RATING',
                link: '/extended/rating',
                parentId: 53
            },
            {
                id: 58,
                label: 'MENUITEMS.EXTENDED.LIST.NOTIFICATION',
                link: '/extended/notification',
                parentId: 53
            }
        ]
    },
    {
        id: 59,
        label: 'MENUITEMS.FORMS.TEXT',
        icon: 'box',
        badge: {
            variant: 'danger',
            text: 'MENUITEMS.FORMS.BADGE',
        },
        subItems: [
            {
                id: 60,
                label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                link: '/form/elements',
                parentId: 59
            },
            {
                id: 61,
                label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                link: '/form/validation',
                parentId: 59
            },
            {
                id: 62,
                label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                link: '/form/advanced',
                parentId: 59
            },
            {
                id: 63,
                label: 'MENUITEMS.FORMS.LIST.EDITOR',
                link: '/form/editor',
                parentId: 59
            },
            {
                id: 64,
                label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                link: '/form/uploads',
                parentId: 59
            },
            {
                id: 65,
                label: 'MENUITEMS.FORMS.LIST.WIZARD',
                link: '/form/wizard',
                parentId: 59
            },
            {
                id: 66,
                label: 'MENUITEMS.FORMS.LIST.MASK',
                link: '/form/mask',
                parentId: 59
            }
        ]
    },
    {
        id: 67,
        icon: 'sliders',
        label: 'MENUITEMS.TABLES.TEXT',
        subItems: [
            {
                id: 68,
                label: 'MENUITEMS.TABLES.LIST.BASIC',
                link: '/tables/basic',
                parentId: 67
            },
            {
                id: 69,
                label: 'MENUITEMS.TABLES.LIST.ADVANCED',
                link: '/tables/datatable',
                parentId: 67
            }
        ]
    },
    {
        id: 70,
        icon: 'pie-chart',
        label: 'MENUITEMS.CHARTS.TEXT',
        subItems: [
            {
                id: 71,
                label: 'MENUITEMS.CHARTS.LIST.APEX',
                link: '/chart/apex',
                parentId: 70
            },
            {
                id: 72,
                label: 'MENUITEMS.CHARTS.LIST.ECHARTS',
                link: '/chart/echart',
                parentId: 70
            },
            {
                id: 73,
                label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
                link: '/chart/chartjs',
                parentId: 70
            }
        ]
    },
    {
        id: 74,
        label: 'MENUITEMS.ICONS.TEXT',
        icon: 'cpu',
        subItems: [
            {
                id: 75,
                label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                link: '/icons/boxicons',
                parentId: 74
            },
            {
                id: 76,
                label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                link: '/icons/materialdesign',
                parentId: 74
            },
            {
                id: 77,
                label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                link: '/icons/dripicons',
                parentId: 74
            },
            {
                id: 78,
                label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                link: '/icons/fontawesome',
                parentId: 74
            },
        ]
    },
    {
        id: 79,
        label: 'MENUITEMS.MAPS.TEXT',
        icon: 'map',
        subItems: [
            {
                id: 80,
                label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                link: '/maps/google',
                parentId: 79
            },
            {
                id: 81,
                label: 'MENUITEMS.MAPS.LIST.LEAFLET',
                link: '/maps/leaflet',
                parentId: 79
            },
            {
                id: 81,
                label: 'MENUITEMS.MAPS.LIST.AMCHARTS',
                link: '/maps/amcharts',
                parentId: 79,
                badge: {
                    variant: 'danger',
                    text: 'MENUITEMS.APPS.BADGE',
                },
            }
        ]
    },
    {
        id: 82,
        label: 'MENUITEMS.MULTILEVEL.TEXT',
        icon: 'share-2',
        subItems: [
            {
                id: 83,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
                link: '#',
                parentId: 82
            },
            {
                id: 83,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
                parentId: 82,
                subItems: [
                    {
                        id: 84,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
                        link: '#',
                        parentId: 83,
                    },
                    {
                        id: 85,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
                        link: '#',
                        parentId: 83,
                    }
                ]
            },
        ]
    }
];


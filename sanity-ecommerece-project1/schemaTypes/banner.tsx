

export default {

    name: 'banner',
    title: 'Banner',
    type: 'document',
    filds:[
        {
            name:'image',
            title:'Image',
            type: 'image',
            of:[{type:'image'}],
            options:{
                hotspot:true,
            }
        },

        {
            name:'name',
            title: 'Name',
            type: 'string',

        },

        {
            name: 'slug',
            title:'Salug',
            type: 'slug',
            options:{
                source:'name',
                maxLength:90,
            }
        },

        {
            name:'price',
            title:'Price',
            type:'number',
        },

        {
            name: 'details',
            title:'Details',
            type:'string',
        },
    ]

}
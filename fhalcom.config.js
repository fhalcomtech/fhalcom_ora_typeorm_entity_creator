const config = {
        host: 'localhost', //Host de la base de datos, por defecto es localhost o usted puede especificar uno, de esta forma 192.168.1.100,
        port: 1521, //Puerto de la base de datos, por defecto oracle utiliza el puerto 1521,
        user: 'usename', //Nombre de usuario para conectarse a la base de datos,
        password: 'password', //Clave de acceso a la base de datos,
        dbname: 'DBNAME', //El nombre de la base de datos en oracle conocida como SID = identifica la instancia de la base de datos (nombre de la base de datos + número de instancia) ejemplo: dbname01,
        schemas: ['SchemaName1','SchemaName2','SchemaName3'], //Arreglo de cadenas con los nombres de los esquemas a buscar ['s1','s2']. Obligatorio si no especifica tablas,
        tables: [{schema: 'Schema3', table:'tableName1'},{schema: 'Schema4', table:'tableName5'}], //Arreglo de objetos que debe contener esquema y tabla tal como [{schema: s1, table:t1}]. Obligatorio si no especifica esquema,
        exclude: [{schema: 'Schema3', table:'tableName1'},{schema: 'Schema4', table:'tableName5'}], //Arreglo de objetos que debe contener esquema y tabla tal como [{schema: s1, table:t1}], Nos dice que tablas no seran tomas en cuenta. Obligatorio no es obligatorio
}

modele.export = config
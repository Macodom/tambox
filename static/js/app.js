angular.module("TamboxApp",["ngRoute","route-segment","view-segment"]);

angular.module("TamboxApp").config(["$routeSegmentProvider","routeProvider",function($routeSegmentProvider,$routeProvider){

    $routeSegmentProvider.when("/administracion","administracion");
    $routeSegmentProvider.when("/administracion/configuracion/aprobacion","administracion.maestro_niveles_aprobacion");
    $routeSegmentProvider.when("/administracion/configuracion/oficinas","administracion.maestro_oficinas");
    $routeSegmentProvider.when("/administracion/configuracion/profesiones","administracion.maestro_profesiones");
    $routeSegmentProvider.when("/administracion/configuracion/puestos","administracion.maestro_puestos");
    $routeSegmentProvider.when("/administracion/configuracion/trabajadores","administracion.maestro_trabajadores");

    $routeSegmentProvider.when("/almacen","almacen");
    $routeSegmentProvider.when("/almacen/configuracion/almacenes","almacen.almacenes");
    $routeSegmentProvider.when("/almacen/configuracion/tipos_movimientos","almacen.tipos_movimientos");
    $routeSegmentProvider.when("/almacen/operaciones/cargar_inventario_inicial","almacen.cargar_inventario_inicial");
    $routeSegmentProvider.when("/almacen/operaciones/crear_pedido","almacen.crear_pedido");
    $routeSegmentProvider.when("/almacen/operaciones/aprobacion_pedidos","almacen.aprobacion_pedidos");
    $routeSegmentProvider.when("/almacen/operaciones/registrar_ingreso","almacen.registrar_ingreso");
    $routeSegmentProvider.when("/almacen/operaciones/registrar_salida","almacen.registrar_salida");
    $routeSegmentProvider.when("/almacen/reportes/kardex","almacen.kardex");
    $routeSegmentProvider.when("/almacen/reportes/kardex_producto","almacen.kardex_producto");
    $routeSegmentProvider.when("/almacen/reportes/consolidado_kardex_productos","almacen.consolidado_kardex_productos");
    $routeSegmentProvider.when("/almacen/reportes/consolidado_kardex_grupos","almacen.consolidado_kardex_grupos");
    $routeSegmentProvider.when("/almacen/reportes/movimientos","almacen.movimientos");
    $routeSegmentProvider.when("/almacen/reportes/pedidos","almacen.pedidos");
    $routeSegmentProvider.when("/almacen/reportes/movimientos_por_fecha","almacen.movimientos_por_fecha");
    $routeSegmentProvider.when("/almacen/reportes/stock_de_productos","almacen.stock_de_productos");

    $routeSegmentProvider.when("/compras","compras");
    $routeSegmentProvider.when("/compras/configuracion/grupos_de_productos","compras.grupos_de_productos");
    $routeSegmentProvider.when("/compras/configuracion/proveedores","compras.proveedores");
    $routeSegmentProvider.when("/compras/configuracion/productos","compras.productos");
    $routeSegmentProvider.when("/compras/configuracion/servicios","compras.servicios");
    $routeSegmentProvider.when("/compras/configuracion/unidades_de_medida","compras.unidades_de_medida");
    $routeSegmentProvider.when("/compras/operaciones/solicitud_de_cotizacion","compras.solicitud_de_cotizacion");
    $routeSegmentProvider.when("/compras/operaciones/orden_de_compra","compras.orden_de_compra");
    $routeSegmentProvider.when("/compras/operaciones/orden_de_servicio","compras.orden_de_servicio");
    $routeSegmentProvider.when("/compras/operaciones/conformidad_servicios","compras.conformidad_servicios");
    $routeSegmentProvider.when("/compras/reportes/cotizaciones","compras.cotizaciones");
    $routeSegmentProvider.when("/compras/reportes/ordenes_de_compra","compras.ordenes_de_compra");
    $routeSegmentProvider.when("/compras/reportes/ordenes_de_servicio","compras.ordenes_de_servicio");
    $routeSegmentProvider.when("/compras/reportes/conformidades_de_servicio","compras.conformidades_de_servicio");
    $routeSegmentProvider.when("/compras/reportes/ordenes_de_compra_por_fecha","compras.ordenes_de_compra_por_fecha");

    $routeSegmentProvider.when("/contabilidad","contabilidad");
    $routeSegmentProvider.when("/contabilidad/configuracion/configuracion","contabilidad.configuracion");
    $routeSegmentProvider.when("/contabilidad/configuracion/cuentas_contables","contabilidad.cuentas_contables");
    $routeSegmentProvider.when("/contabilidad/configuracion/formas_de_pago","contabilidad.formas_de_pago");
    $routeSegmentProvider.when("/contabilidad/configuracion/impuestos","contabilidad.impuestos");
    $routeSegmentProvider.when("/contabilidad/configuracion/tipos_de_documentos","contabilidad.tipos_de_documentos");

    $routeSegmentProvider.when("/requerimientos","requerimientos");
    $routeSegmentProvider.when("/requerimientos/operaciones/requerimiento","requerimientos.requerimiento");
    $routeSegmentProvider.when("/requerimientos/operaciones/aprobacion_requerimientos","requerimientos.aprobacion_requerimientos");
    $routeSegmentProvider.when("/requerimientos/reportes/requerimientos","requerimientos.requerimientos_requerimientos");


    $routeSegmentProvider.segment("administracion",{
        controller:"AdministracionController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("administracion").segment("maestro_niveles_aprobacion",{
        controller:"MaestroNivelesAprobacionController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("administracion").segment("maestro_oficinas",{
        controller:"MaestroOficinasController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("administracion").segment("maestro_profesiones",{
        controller:"MaestroProfesionesController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("administracion").segment("maestro_puestos",{
        controller:"MaestroPuestosController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("administracion").segment("maestro_trabajadores",{
        controller:"MaestroTrabajadoresController",
        templateUrl:""
    });

    $routeSegmentProvider.segment("almacen",{
        controller:"AlmacenController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("almacen").segment("almacenes",{
        controller:"AlmacenesController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("almacen").segment("tipos_movimientos",{
        controller:"TiposMovimientosController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("almacen").segment("cargar_inventario_inicial",{
        controller:"CargarInventarioInicialController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("almacen").segment("crear_pedido",{
        controller:"CrearPedidoController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("almacen").segment("aprobacion_pedidos",{
        controller:"AprobacionPedidosController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("almacen").segment("registrar_ingreso",{
        controller:"RegistrarIngresoController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("almacen").segment("registrar_salida",{
        controller:"RegistrarSalidaController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("almacen").segment("kardex",{
        controller:"KardexController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("almacen").segment("kardex_producto",{
        controller:"KardexProductoController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("almacen").segment("consolidado_kardex_productos",{
        controller:"ConsolidadoKardexProductosController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("almacen").segment("consolidado_kardex_grupos",{
        controller:"ConsolidadoKardexGruposController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("almacen").segment("movimientos",{
        controller:"MovimientosController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("almacen").segment("pedidos",{
        controller:"PedidosController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("almacen").segment("movimientos_por_fecha",{
        controller:"MovimientosPorFechaController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("almacen").segment("stock_de_productos",{
        controller:"StockDeProductosController",
        templateUrl:""
    });

    $routeSegmentProvider.segment("compras",{
        controller:"ComprasController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("compras").segment("grupos_de_productos",{
        controller:"GruposDeProductosController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("compras").segment("proveedores",{
        controller:"ProveedoresController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("compras").segment("productos",{
        controller:"ProductosController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("compras").segment("servicios",{
        controller:"ServiciosController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("compras").segment("unidades_de_medida",{
        controller:"UnidadesDeMedidaController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("compras").segment("solicitud_de_cotizacion",{
        controller:"SolicitudDeCotizacionController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("compras").segment("orden_de_compra",{
        controller:"OrdenDeCompraController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("compras").segment("orden_de_servicio",{
        controller:"OrdenDeServicioController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("compras").segment("conformidad_servicios",{
        controller:"ConformidadServiciosController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("compras").segment("cotizaciones",{
        controller:"CotizacionesController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("compras").segment("ordenes_de_compra",{
        controller:"OrdenesDeCompraController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("compras").segment("ordenes_de_servicio",{
        controller:"OrdenesDeServicioController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("compras").segment("conformidades_de_servicio",{
        controller:"ConformidadesDeServicioController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("compras").segment("ordenes_de_compra_por_fecha",{
        controller:"OrdenesDeCompraPorFechaController",
        templateUrl:""
    });

    $routeSegmentProvider.segment("contabilidad",{
        controller:"ContabilidadController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("contabilidad").segment("configuracion",{
        controller:"ConfiguracionController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("contabilidad").segment("cuentas_contables",{
        controller:"CuentasContablesController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("contabilidad").segment("formas_de_pago",{
        controller:"FormasDePagoController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("contabilidad").segment("impuestos",{
        controller:"ImpuestosController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("contabilidad").segment("tipos_de_documentos",{
        controller:"TiposDeDocumentosController",
        templateUrl:""
    });

    $routeSegmentProvider.segment("requerimientos",{
        controller:"RequerimientosController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("requerimientos").segment("requerimiento",{
        controller:"RequerimientoController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("requerimientos").segment("aprobacion_requerimientos",{
        controller:"AprobacionRequerimientosController",
        templateUrl:""
    });
    $routeSegmentProvider.whitin("requerimientos").segment("requerimientos_requerimientos",{
        controller:"RequerimientosRequerimientosController",
        templateUrl:""
    });

}]);
import models.Producto;

public class Main {
    public static void main(String[] args) {
        GestorProducto gestor = new GestorProducto();

        // Crear productos
        Producto p1 = new Producto(1, "Laptop", 1200.50, "Electrónica");
        Producto p2 = new Producto(2, "Smartphone", 800.00, "Electrónica");

        // Agregar productos
        gestor.agregarProducto(p1);
        gestor.agregarProducto(p2);

        // Listar productos
        gestor.listarProductos();

        // Eliminar producto
        gestor.eliminarProducto(1);

        // Listar productos nuevamente
        gestor.listarProductos();
    }
}
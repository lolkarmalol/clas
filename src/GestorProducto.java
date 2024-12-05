import java.util.ArrayList;
import java.util.List;
import models.Producto;

public class GestorProducto {
    private final List<Producto> productos; // Cambiado a final

    public GestorProducto() {
        this.productos = new ArrayList<>();
    }

    public void agregarProducto(Producto producto) {
        productos.add(producto);
        System.out.println("Producto agregado: " + producto);
    }

    public void eliminarProducto(int id) {
        productos.removeIf(producto -> producto.getId() == id);
        System.out.println("Producto eliminado con ID: " + id);
    }

    public void listarProductos() {
        System.out.println("Lista de productos:");
        for (Producto producto : productos) {
            System.out.println(producto);
        }
    }
}
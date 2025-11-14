import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  mode?: "default" | "home";
}

const ProductCard = ({ product, mode = "default" }: ProductCardProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const isSesameOil = product.id === 1;

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <Link to={`/product/${product.id}`}>
          <div className="relative overflow-hidden aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
            />
            <Badge className="absolute top-2 right-2 bg-accent">{product.category}</Badge>
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.description}</p>
        <div className="flex items-baseline justify-between">
          <span className="text-2xl font-bold text-primary">${product.price}</span>
          <span className="text-sm text-muted-foreground">per {product.unit}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {mode === "home" ? (
          isSesameOil ? (
            <Button
              onClick={handleBuyNow}
              disabled={!product.inStock}
              className="w-full"
              variant="default"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Buy Now
            </Button>
          ) : (
            <Link to={`/product/${product.id}`} className="w-full">
              <Button className="w-full" variant="outline">
                Learn More
              </Button>
            </Link>
          )
        ) : (
          <Button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="w-full"
            variant="default"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft, Package, Truck, Shield, MessageCircle } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  const isSesameOil = product?.id === 1;

  const handleInquiry = () => {
    if (!product) return;
    navigate(`/contact?product=${encodeURIComponent(product.name)}`);
  };

  const handleBuyNow = () => {
    if (!product) return;
    addToCart(product);
    navigate("/cart");
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h2>
          <Link to="/products">
            <Button variant="outline">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container px-4">
        <Link to="/products">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <Badge className="absolute top-4 right-4 bg-accent">{product.category}</Badge>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>
            
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-bold text-primary">${product.price}</span>
              <span className="text-lg text-muted-foreground">per {product.unit}</span>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-col md:flex-row gap-3 mb-6">
              {isSesameOil ? (
                <>
                  <Button
                    size="lg"
                    onClick={handleBuyNow}
                    disabled={!product.inStock}
                    className="w-full md:w-auto"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Buy Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleInquiry}
                    className="w-full md:w-auto"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Request Inquiry
                  </Button>
                </>
              ) : (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleInquiry}
                  className="w-full md:w-auto"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Request Inquiry
                </Button>
              )}
            </div>

            {/* Product Features */}
            <div className="space-y-4 border-t border-border pt-8">
              <h3 className="font-semibold text-foreground mb-4">Product Features</h3>
              <div className="flex items-start space-x-3">
                <Package className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">Package Size</h4>
                  <p className="text-sm text-muted-foreground">{product.unit} per unit</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Truck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">Fast Delivery</h4>
                  <p className="text-sm text-muted-foreground">Free shipping on orders over $50</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground">Quality Guarantee</h4>
                  <p className="text-sm text-muted-foreground">100% organic and certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

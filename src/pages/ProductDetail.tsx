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
      <div className="min-h-screen bg-background flex items-center justify-center py-16">
        <div className="text-center max-w-md mx-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Product Not Found</h2>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products">
            <Button size="lg">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 sm:px-6 py-10 sm:py-14">
        <div className="mb-8 sm:mb-10">
          <Link to="/products">
            <Button variant="ghost" className="-ml-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Product Image */}
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
              {product.category}
            </Badge>
          </div>

          {/* Product Details */}
          <div className="space-y-5 sm:space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-baseline gap-3 sm:gap-4">
                <span className="text-3xl sm:text-4xl font-bold text-primary">
                  ${product.price}
                </span>
                <span className="text-base sm:text-lg text-muted-foreground">
                  per {product.unit}
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
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
            <div className="space-y-5 border-t border-border pt-8 mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-5">Product Features</h3>
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-muted/30 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Package Size</h4>
                  <p className="text-sm text-muted-foreground">{product.unit} per unit</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-muted/30 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Fast Delivery</h4>
                  <p className="text-sm text-muted-foreground">Free shipping on orders over $50</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 sm:p-4 bg-muted/30 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
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

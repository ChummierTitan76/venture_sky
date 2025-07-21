import DroneIcon from "@/components/drone-icon";
import Inspire2Small from "@/components/inspire-2-small";
import Mini3Large from "@/components/mini-3-large";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function DroneShowcase() {
  return (
    <section className="py-12 bg-neutral">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-secondary mb-8">Drone Fleet</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <h3 className="text-lg font-semibold text-card-foreground">DJI Inspire 2</h3>
              <p className="text-sm text-muted-foreground">Standard Size</p>
            </CardHeader>
            <CardContent className="flex justify-center py-8">
              <DroneIcon className="w-16 h-16 text-primary" />
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <h3 className="text-lg font-semibold text-card-foreground">DJI Inspire 2</h3>
              <p className="text-sm text-muted-foreground">Compact Size</p>
            </CardHeader>
            <CardContent className="flex justify-center py-8">
              <Inspire2Small className="w-12 h-12 text-primary" />
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <h3 className="text-lg font-semibold text-card-foreground">DJI Mini 3</h3>
              <p className="text-sm text-muted-foreground">Large Detailed View</p>
            </CardHeader>
            <CardContent className="flex justify-center py-8">
              <Mini3Large className="w-24 h-24 text-primary" />
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-secondary mb-4">Our Equipment</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We use professional-grade drones including the DJI Inspire 2 for cinematic footage and the compact DJI Mini 3 for versatile aerial photography. Each drone is perfectly suited for different types of projects and environments.
          </p>
        </div>
      </div>
    </section>
  );
}
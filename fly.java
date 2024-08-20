public class Fly {
    // Variables
    private double mass;  // The mass of the Fly in grams
    private double speed; // The speed of the Fly

    // Constructors
    public Fly(double mass, double speed) {
        this.mass = mass;
        this.speed = speed;
    }

    public Fly(double mass) {
        this(mass, 10); // Default speed is 10
    }

    public Fly() {
        this(5, 10); // Default mass is 5 and speed is 10
    }

    // Getters and Setters
    public double getMass() {
        return mass;
    }

    public void setMass(double mass) {
        this.mass = mass;
    }

    public double getSpeed() {
        return speed;
    }

    public void setSpeed(double speed) {
        this.speed = speed;
    }

    // toString method
    @Override
    public String toString() {
        if (mass == 0) {
            return String.format("I’m dead, but I used to be a fly with a speed of %.2f.", speed);
        } else {
            return String.format("I’m a speedy fly with %.2f speed and %.2f mass.", speed, mass);
        }
    }

    // grow method
    public void grow(int addedMass) {
        if (mass == 0) {
            return; // If the Fly is dead, it cannot grow
        }

        if (mass < 20) {
            int growthLimit = Math.min(addedMass, (int)(20 - mass));
            speed += growthLimit; // Increase speed by 1 for each unit of mass up to 20
            addedMass -= growthLimit;
        }

        if (mass + addedMass >= 20) {
            speed -= (mass + addedMass - 20) * 0.5; // Decrease speed by 0.5 for each unit of mass over 20
        }

        mass += addedMass; // Increase the Fly's mass
    }

    // isDead method
    public boolean isDead() {
        return mass == 0;
    }
}
import matplotlib.pyplot as plt

blue="#0d47a1"
red="#b71c1c"
green="#1b5e20"
yellow="#fdd835"

color_map = {
    "blue": blue,
    "red": red,
    "green": green,
    "yellow": yellow
}



def draw_card_with_circles(circle_positions, card_size=(2.5, 3.5), circle_radius=0.5, filename=None, color="#0d47a1"):
    fig, ax = plt.subplots(figsize=card_size)

    # Draw the circles based on the given positions
    for x, y in circle_positions:
        circle = plt.Circle((x, y), circle_radius, color=color, fill=True)
        ax.add_artist(circle)

    # Set limits and aspect ratio
    ax.set_xlim(0, card_size[0])
    ax.set_ylim(0, card_size[1])
    ax.set_aspect('equal')

    # Remove axes for clean output
    ax.axis('off')

    # Save the image if a filename is provided
    if filename:
        plt.savefig(filename, dpi=300, bbox_inches='tight')

    # Return the figure and axes
    return fig, ax


# Define circle positions for the requested cards
card_details = [
    [(1.25, 1.75)],  # Single circle
    [(1.25, 2.30), (1.25, 1.20)],  # Two circles, one under the other
    [(0.7, 1.20), (1.8, 1.20), (1.25, 2.2)],  # Three circles: two at bottom, one on top
    [(0.7, 2.3), (1.8, 2.3), (0.7, 1.2), (1.8, 1.2)],  # Four circles forming a square
]

colors = [blue, red, green, yellow]

# Draw all the cards and save them as 
for i, circle_positions in enumerate(card_details, start=1):
    for color_name, color_value in color_map.items():  # Loop through the color name and value
        filename = f'{color_name}_card_with_{len(circle_positions)}_circles.png'  # Use the color name
        draw_card_with_circles(circle_positions, filename=filename, color=color_value)
        print(f"Saved: {filename}")


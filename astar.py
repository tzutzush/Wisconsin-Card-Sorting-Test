import matplotlib.pyplot as plt
import numpy as np

blue = "#0d47a1"
red = "#b71c1c"
green = "#1b5e20"
yellow = "#fdd835"

color_map = {
    "blue": blue,
    "red": red,
    "green": green,
    "yellow": yellow
}

def draw_star(x, y, size=0.5, color="#0d47a1"):
    """Draw a star at the given position with the given size and color."""
    # Define the angles for the points of the star
    angles = np.linspace(0, 2 * np.pi, 6)  # 5 points of the star + 1 for the closing point
    points = []

    for i in range(5):
        # Outer points (star tips)
        angle = angles[i]
        x_point = x + size * np.cos(angle)
        y_point = y + size * np.sin(angle)
        points.append((x_point, y_point))

        # Inner points (star inner arms)
        inner_angle = angles[i] + np.pi / 5  # Adjust the angle to the inner arms of the star
        x_point_inner = x + (size / 2) * np.cos(inner_angle)
        y_point_inner = y + (size / 2) * np.sin(inner_angle)
        points.append((x_point_inner, y_point_inner))

    # Close the polygon to make the star
    points.append(points[0])  # Add the first point again to close the loop

    # Create the star as a Polygon
    star = plt.Polygon(points, color=color, fill=True)
    return star

def draw_card_with_stars(star_positions, card_size=(2.5, 3.5), star_size=0.5, filename=None, color="#0d47a1"):
    fig, ax = plt.subplots(figsize=card_size)

    # Draw the stars based on the given positions
    for x, y in star_positions:
        star = draw_star(x, y, size=star_size, color=color)
        ax.add_artist(star)

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

# Define star positions for the requested cards
card_details = [
    [(1.25, 1.75)],  # Single star
    [(1.25, 2.30), (1.25, 1.20)],  # Two stars, one under the other
    [(0.7, 1.20), (1.8, 1.20), (1.25, 2.2)],  # Three stars: two at bottom, one on top
    [(0.7, 2.3), (1.8, 2.3), (0.7, 1.2), (1.8, 1.2)],  # Four stars forming a square
]

colors = [blue, red, green, yellow]

# Draw all the cards and save them as images
for i, star_positions in enumerate(card_details, start=1):
    for color_name, color_value in color_map.items():  # Loop through the color name and value
        filename = f'{color_name}_card_with_{len(star_positions)}_stars.png'  # Use the color name
        draw_card_with_stars(star_positions, filename=filename, color=color_value)
        print(f"Saved: {filename}")

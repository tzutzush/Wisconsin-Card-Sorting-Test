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

def draw_card_with_shapes(shape_positions, card_size=(2.5, 3.5), shape_size=0.35, filename=None, color="#0d47a1"):
    fig, ax = plt.subplots(figsize=card_size)

    # Draw the shapes (chunkier, shorter crosses) based on the given positions
    for x, y in shape_positions:
        # Define the lines for the cross (horizontal and vertical), but with shorter length
        horizontal_line = [[x - shape_size, y], [x + shape_size, y]]  # Horizontal line
        vertical_line = [[x, y - shape_size], [x, y + shape_size]]  # Vertical line
        
        # Increase the line width to make the cross chunkier
        ax.plot([horizontal_line[0][0], horizontal_line[1][0]], [horizontal_line[0][1], horizontal_line[1][1]], color=color, lw=10)  # Thicker line width
        ax.plot([vertical_line[0][0], vertical_line[1][0]], [vertical_line[0][1], vertical_line[1][1]], color=color, lw=10)  # Thicker line width

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

# Define shape positions for the requested cards (as shorter, chunkier crosses now)
card_details = [
    [(1.25, 1.75)],  # Single chunky cross
    [(1.25, 2.30), (1.25, 1.20)],  # Two chunky crosses, one under the other
    [(0.7, 1.20), (1.8, 1.20), (1.25, 2.2)],  # Three chunky crosses: two at bottom, one on top
    [(0.7, 2.3), (1.8, 2.3), (0.7, 1.2), (1.8, 1.2)],  # Four chunky crosses forming a square
]

colors = [blue, red, green, yellow]

# Draw all the cards and save them as images
for i, shape_positions in enumerate(card_details, start=1):
    for color_name, color_value in color_map.items():  # Loop through the color name and value
        filename = f'{color_name}_card_with_{len(shape_positions)}_crosses.png'  # Use the color name
        draw_card_with_shapes(shape_positions, filename=filename, color=color_value)
        print(f"Saved: {filename}")

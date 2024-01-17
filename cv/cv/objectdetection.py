import cv2
# Function to calculate distance based on object size
def calculate_distance(known_width,known_height, focal_length, per_width,per_height):
   distance_width=(known_width*focal_length)/per_width
   distance_height=(known_height*focal_length)/per_height
   return (distance_width + distance_height) / 2

# Constants for object width, focal length, and camera resolution (example values)
KNOWN_WIDTH = 10.0 #in cm
KNOWN_HEIGHT=15.0 #in cm
FOCAL_LENGTH = 500.0  
CAMERA_RESOLUTION = (640, 480) 

# Initialize the camera
cap = cv2.VideoCapture(0)


# Object detection loop
while True:
    ret, frame = cap.read()

    if not ret:
        break

    # Object detection code (you'll need a specific object detection algorithm here)
    # Invert the frame to emphasize darker regions
    inverted_frame = cv2.bitwise_not(frame)

    # Convert the inverted frame to grayscale
    gray = cv2.cvtColor(inverted_frame, cv2.COLOR_BGR2GRAY)

    # Apply thresholding to detect darker objects
    _, threshold = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    # Find contours in the thresholded image
    contours, _ = cv2.findContours(threshold, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    largest_contour= max(contours,key=cv2.contourArea,default=None)

    if largest_contour is not None:
        x,y,w,h=cv2.boundingRect(largest_contour)
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

    for cnt in contours:
        area =cv2.contourArea(cnt)

        if area>100:
            x, y, w, h = cv2.boundingRect(cnt)

        # Calculate object distance using width of the bounding box
        distance = calculate_distance(KNOWN_WIDTH,KNOWN_HEIGHT, FOCAL_LENGTH, w,h)
        cv2.putText(frame, f"Distance: {distance:.2f} cm", (x, y - 10),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

    cv2.imshow('Object Distance Tracking', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
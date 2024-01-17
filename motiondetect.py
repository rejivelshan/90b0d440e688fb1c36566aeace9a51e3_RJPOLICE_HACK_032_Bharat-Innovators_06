import cv2
import numpy as np


cap = cv2.VideoCapture(1)


ret, reference_frame = cap.read()
reference_gray = cv2.cvtColor(reference_frame, cv2.COLOR_BGR2GRAY)


displacement_threshold = 7000000

while True:

    ret, frame = cap.read()


    current_gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)


    frame_diff = cv2.absdiff(reference_gray, current_gray)


    displacement = np.sum(frame_diff)


    if displacement > displacement_threshold:

        print("Camera displacement detected!")

       
        reference_frame = frame.copy()
        reference_gray = current_gray.copy()


    cv2.imshow('Camera Displacement Detection', frame)


    if cv2.waitKey(1) & 0xFF == ord('q'):
        break


cap.release()
cv2.destroyAllWindows()

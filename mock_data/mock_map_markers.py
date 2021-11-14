import random
import math
import names
import json

FILE_NAME = "mock_map_markers.json"
EARTH_RADIUS = 6373.0

# (52.427547, 10.780420) wolfsburg coordinates
BEGIN_POINT = (52.427547, 10.780420)
# meters
RANGE_CIRCLE = 5000
MARKERS_COUNT = 20

Meters = Degrees = int | float
Latitude = Longitude = float
Coordinates = tuple[Latitude, Longitude]


def convert_meters_to_degrees(radius: Meters) -> float:
    return radius / 111300


# TODO need check coordinates in circle or circle :D
def get_random_coordinate_in_radius(zero_point: Coordinates, radius: Meters) -> Coordinates:
    radius_in_degrees = convert_meters_to_degrees(radius)
    u = random.uniform(0., 1.)
    v = random.uniform(0., 1.)
    w = radius_in_degrees * math.sqrt(u)
    t = 2 * math.pi * v
    x = w * math.cos(t)
    y = w * math.sin(t)

    tmp_x = x / math.cos(math.radians(zero_point[0]))
    return tmp_x + zero_point[0], y + zero_point[1]


def get_random_fullname():
    return names.get_full_name()


def get_distance_two_coordinates(first: Coordinates, second: Coordinates) -> Meters:
    lat1, lon1 = math.radians(first[0]), math.radians(first[1])
    lat2, lon2 = math.radians(second[0]), math.radians(second[1])

    dlat, dlon = lat2 - lat1, lon2 - lon1
    a = math.sin(dlat / 2) ** 2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2) ** 2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return abs(EARTH_RADIUS * c * 1000)


def cycle_wrapper():
    second_point = get_random_coordinate_in_radius(BEGIN_POINT, 5000)
    return {
        "name": get_random_fullname(),
        "coordinates": second_point,
        "distance": get_distance_two_coordinates(BEGIN_POINT, second_point)
    }


def main():
    list_of_markers = [
        cycle_wrapper()
        for _ in range(MARKERS_COUNT)
    ]
    with open(FILE_NAME, 'w') as file:
        file.write(json.dumps(list_of_markers))


if __name__ == '__main__':
    main()

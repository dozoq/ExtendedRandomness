# Extended Randomness Description
Javascript class for extended randomness handling

The basic algorithm of this random number generator is marsenne twister, in future there will be more implementation

## Setup

use code snippet inside your head tag, or just import it if you're using node.js

```
<script src="ExtendedRandomness.js" type="text/javascript">
</script>
```

## Using

To use Extended Randomness just create instance of random handler function inside your script tag

```
var random = new RandomHandler();
```

The most useful funtions are GetRandomNumber() and GetRandomNumberBetween(min, max), you can use them instantly after creating instance of RandomHandler class

### GetRandomNumber()
generate random number between 0 and 2^32
```
Console.log(GetRandomNumber());
```

### GetRandomNumberBetween(min, max)
Generate random number between min and max, you can use int or float as output
```
Console.log(GetRandomNumberBetween(10,20)); //Int output
Console.log(GetRandomNumberBetween(10.1,20)); //Float output
```

## Leave your feedback
if you have any ideas how to improve this library, please leave info and I'll try to implement this in future

### contact
if you want to contact with me, you can send email on address: Sebastian.Malek@Fajne.To
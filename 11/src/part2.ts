export function part2(input: string) {
  const deviceMap = input
    .split('\n')
    .map((line) => {
      const [id, outputsChunk] = line.split(': ');
      const outputs = outputsChunk.split(' ');

      return [id, outputs] as const;
    })
    .reduce((acc, [id, outputs]) => {
      acc.set(id, outputs);
      return acc;
    }, new Map<string, string[]>());

  const outputs = deviceMap.get('svr')!;

  return solve(new Device('svr', outputs), deviceMap);
}

class Device {
  id: string;
  outputs: string[];
  fft: boolean;
  dac: boolean;

  constructor(id: string, outputs: string[], fft = false, dac = false) {
    this.id = id;
    this.outputs = outputs;
    this.fft = fft;
    this.dac = dac;
  }

  getCacheKey() {
    return [this.id, this.outputs.toString(), Number(this.fft), Number(this.dac)].toString();
  }
}

function isValidPath(device: Device) {
  return device.dac && device.fft;
}

const cache = new Map<string, number>();

function solve(device: Device, deviceMap: Map<string, string[]>): number {
  const cacheKey = device.getCacheKey();

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey)!;
  }

  if (device.outputs[0] === 'out') {
    if (device.dac && device.fft) {
      cache.set(cacheKey, 1);
      return 1;
    }

    cache.set(cacheKey, 0);
    return 0;
  }

  const result =  device.outputs.reduce((acc, curr) => {
    const newDevice = new Device(
      curr,
      deviceMap.get(curr)!,
      device.fft || device.id === 'fft',
      device.dac || device.id === 'dac'
    );
    return acc + solve(newDevice, deviceMap);
  }, 0);

  cache.set(cacheKey, result);

  return result;
}

function solvex(device: Device, devices: Map<string, Device>) {
  const queue = [device];
  let count = 0;

  while (queue.length) {
    const device = queue.pop()!;

    for (const output of device.outputs) {
      if (output === 'out') {
        console.log(device);
        if (isValidPath(device)) {
          count++;
        }
        continue;
      }

      const next = devices.get(output)!;

      const newDevice = new Device(next.id, next.outputs, device.fft, device.dac);

      if (device.id === 'fft') {
        newDevice.fft = true;
      }

      if (device.id === 'dac') {
        newDevice.dac = true;
      }

      queue.push(newDevice);
    }
  }

  return count;
}

// export function part2(input: string) {
//   const devices = input
//     .split('\n')
//     .map((line) => {
//       const [id, outputsChunk] = line.split(': ');
//       const outputs = outputsChunk.split(' ');

//       return [id, outputs] as const;
//     })
//     .reduce((acc, [id, outputs]) => {
//       acc.set(id, outputs);
//       return acc;
//     }, new Map<string, string[]>());

//   const startFft = devices.get('fft')!;
//   const startDac = devices.get('dac')!;

//   return solveFft(startFft, devices) + solveDac(startDac, devices);
// }

// function solveFft(outputs: string[], devices: Map<string, string[]>) {
//   const queue = [outputs];
//   let count = 0;

//   while (queue.length) {
//     const outputs = queue.pop()!;

//     for (const output of outputs) {
//       if (output === 'out') {
//         continue;
//       }
//       if (output === 'dac') {
//         count += solveOut(devices.get(output)!, devices);
//         continue;
//       }

//       queue.push(devices.get(output)!);
//     }
//   }

//   return count;
// }

// function solveDac(outputs: string[], devices: Map<string, string[]>) {
//   const queue = [outputs];
//   let count = 0;

//   while (queue.length) {
//     const outputs = queue.pop()!;

//     for (const output of outputs) {
//       if (output === 'out') {
//         continue;
//       }
//       if (output === 'fft') {
//         count += solveOut(devices.get(output)!, devices);
//         continue;
//       }

//       queue.push(devices.get(output)!);
//     }
//   }

//   return count;
// }

// function solveOut(outputs: string[], devices: Map<string, string[]>) {
//   const queue = [outputs];
//   let count = 0;

//   while (queue.length) {
//     const outputs = queue.pop()!;

//     for (const output of outputs) {
//       if (output === 'out') {
//         count++;
//         continue;
//       }

//       queue.push(devices.get(output)!);
//     }
//   }

//   return count;
// }

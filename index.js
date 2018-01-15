import OfflineBackendClass from './src/implementation';

/**
 * Add extension hooks to global scope.
 */
if (typeof window !== 'undefined') {
  window.OfflineBackendClass = OfflineBackendClass;
}

export default OfflineBackendClass;